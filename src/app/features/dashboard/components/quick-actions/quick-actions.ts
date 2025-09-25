import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
})
export class QuickActions {
  title = input<string>('Quick Actions');
}
