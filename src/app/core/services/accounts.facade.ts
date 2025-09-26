import { Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { finalize, shareReplay, tap } from 'rxjs/operators';

import { AccountsGateway } from '@core/api/gateways/accounts.gateway';
import { ACCOUNTS_COLUMNS_DATA } from '@core/models/accounts-data';
import { AccountRow } from '@core/types/dashboard.types';
import { ColumnDef } from '@core/types/table.types';

@Injectable({ providedIn: 'root' })
export class AccountsFacade {
  readonly filter = signal<string>('');

  readonly columns: ColumnDef[] = ACCOUNTS_COLUMNS_DATA;
  private readonly _loading = signal<boolean>(true);
  readonly isLoading = computed(() => this._loading());
  private readonly _error = signal<unknown | null>(null);
  readonly error = computed(() => this._error());
  private readonly _gateway = inject(AccountsGateway);
  private readonly _accounts$ = this._gateway.listAccounts().pipe(
    tap(() => {
      this._error.set(null);
      this._loading.set(true);
    }),
    finalize(() => this._loading.set(false)),
    shareReplay({ bufferSize: 1, refCount: true }),
  );
  readonly accounts = toSignal(this._accounts$, { initialValue: [] as AccountRow[] });
  private _debounced = signal<string>('');
  readonly filteredAccounts = computed(() => {
    const rows = this.accounts();
    const needle = this._debounced().toLowerCase().trim();
    if (!needle) return rows;
    return rows.filter((r) => {
      const name = r.account.name.toLowerCase();
      const type = r.account.type.toLowerCase();
      const line = r.line.toLowerCase();
      const broker = r.broker.toLowerCase();
      const status = r.status.toLowerCase();
      const appetite = r.appetite.toLowerCase();
      return (
        name.includes(needle) ||
        type.includes(needle) ||
        line.includes(needle) ||
        broker.includes(needle) ||
        status.includes(needle) ||
        appetite.includes(needle)
      );
    });
  });
  readonly viewModel = computed(() => {
    const rows = this.filteredAccounts();
    return {
      rows,
      columns: this.columns,
      isLoading: this.isLoading(),
      isEmpty: !this.isLoading() && rows.length === 0,
      error: this.error(),
    };
  });
  private _debounceTimer?: ReturnType<typeof setTimeout>;

  updateFilter(v: string) {
    this.filter.set(v);
    clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => this._debounced.set(v), 200);
  }

  clearFilter() {
    this.updateFilter('');
  }
}
