import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { SmartCellDirective } from '@core/directives/smart-cell.directive';
import { WorkQueueFacade } from '@core/services/work-queue.facade';

import { Avatar } from '@shared/ui/avatar/avatar';
import { Button } from '@shared/ui/button/button';
import { SmartTable } from '@shared/ui/table/smart-table';

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [CommonModule, SmartTable, SmartCellDirective, Avatar, Button],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue {
  title = input<string>('Work Queue');
  private readonly _facade = inject(WorkQueueFacade);
  readonly viewModel = this._facade.viewModel;

  setActiveTab = (tab: 'All' | 'Assigned to me' | 'Pending Review' | 'Referrals') =>
    this._facade.setActiveTab(tab);

  getStatusClass = (value: string) => this._facade.getStatusClass(value);
}
