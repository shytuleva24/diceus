import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { finalize, shareReplay, tap } from 'rxjs/operators';

import { WorkQueueGateway } from '@core/api/gateways/work-queue.gateway';
import { WORK_QUEUE_COLUMNS_DATA } from '@core/models/work-queue-data';
import { WorkQueueItem } from '@core/types/dashboard.types';
import { ColumnDef } from '@core/types/table.types';

type WorkQueueTab = 'All' | 'Assigned to me' | 'Pending Review' | 'Referrals';

@Injectable({ providedIn: 'root' })
export class WorkQueueFacade {
  readonly activeTab = signal<WorkQueueTab>('All');
  readonly columns: ColumnDef[] = WORK_QUEUE_COLUMNS_DATA;
  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);
  private readonly _gateway = inject(WorkQueueGateway);
  private readonly _loading = signal<boolean>(true);
  readonly isLoading = computed(() => this._loading());
  private readonly _error = signal<unknown | null>(null);
  readonly error = computed(() => this._error());
  readonly viewModel = computed(() => {
    const tabs = [
      { name: 'All', count: this.allCount() },
      { name: 'Assigned to me', count: this.assignedToMeCount() },
      { name: 'Pending Review', count: this.pendingReviewCount() },
      { name: 'Referrals', count: this.referralsCount() },
    ] as { name: WorkQueueTab; count: number }[];

    const rows = this.filteredWorkQueue();
    return {
      rows,
      columns: this.columns,
      activeTab: this.activeTab(),
      tabs,
      isLoading: this.isLoading(),
      isEmpty: !this.isLoading() && rows.length === 0,
      error: this.error(),
    };
  });
  private readonly _workQueue$ = this._gateway.listWorkQueue().pipe(
    tap(() => {
      this._error.set(null);
      this._loading.set(true);
    }),
    finalize(() => this._loading.set(false)),
    shareReplay({ bufferSize: 1, refCount: true }),
  );
  readonly workQueue = toSignal(this._workQueue$, { initialValue: [] as WorkQueueItem[] });
  readonly allCount = computed(() => this.workQueue().length);
  readonly assignedToMeCount = computed(
    () => this.workQueue().filter((item) => item.originator === 'Me').length,
  );
  readonly pendingReviewCount = computed(
    () =>
      this.workQueue().filter((item) => {
        const status = item.status.toLowerCase();
        return status === 'pending review' || status.includes('pending review');
      }).length,
  );
  readonly referralsCount = computed(
    () =>
      this.workQueue().filter((item) => {
        const type = item.type.toLowerCase();
        return type.includes('referral');
      }).length,
  );
  readonly filteredWorkQueue = computed(() => {
    const items = this.workQueue();
    const tab = this.activeTab();

    switch (tab) {
      case 'Assigned to me':
        return items.filter((item) => item.originator === 'Me');
      case 'Pending Review':
        return items.filter((item) => {
          const status = item.status.toLowerCase();
          return status === 'pending review' || status.includes('pending review');
        });
      case 'Referrals':
        return items.filter((item) => {
          const type = item.type.toLowerCase();
          return type.includes('referral');
        });
      case 'All':
      default:
        return items;
    }
  });

  constructor() {
    effect(() => {
      const queryParams = this._route.snapshot.queryParams;
      const tabFromQuery = queryParams['tab'] as WorkQueueTab;
      if (
        tabFromQuery &&
        ['All', 'Assigned to me', 'Pending Review', 'Referrals'].includes(tabFromQuery)
      ) {
        this.activeTab.set(tabFromQuery);
      }
    });

    effect(() => {
      const currentTab = this.activeTab();
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { tab: currentTab },
        queryParamsHandling: 'merge',
      });
    });
  }

  setActiveTab(tab: WorkQueueTab): void {
    this.activeTab.set(tab);
  }

  getStatusClass(value: string): string {
    return (value?.trim().split(' ')[0] || '').toLowerCase();
  }
}
