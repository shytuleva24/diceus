import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue {
  title = input<string>('Work Queue');

  tabs = input<string[]>(['All', 'Pending', 'Completed']);
  activeTab = input<string>('All');
}
