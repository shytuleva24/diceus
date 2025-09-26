import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

import { SmartCellDirective } from '@core/directives/smart-cell.directive';
import { WORK_QUEUE_COLUMNS_DATA, WORK_QUEUE_MOCK_DATA } from '@core/models/work-queue-data';

import { SmartTableComponent } from '@shared/table/smart-table.component';
import { Avatar } from '@shared/ui/avatar/avatar';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [CommonModule, SmartTableComponent, SmartCellDirective, Avatar, Button],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue {
  title = input<string>('Work Queue');
  tabs = input<string[]>(['All', 'Pending', 'Completed']);
  activeTab = input<string>('All');

  rows = signal(WORK_QUEUE_MOCK_DATA);
  columns = signal(WORK_QUEUE_COLUMNS_DATA);

  getStatusClass(value: string): string {
    return (value?.trim().split(' ')[0] || '').toLowerCase();
  }
}
