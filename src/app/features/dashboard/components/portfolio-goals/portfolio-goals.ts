import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Goal } from '@core/types/dashboard.types';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {
  title = input<string>('Portfolio Goals');
  goals = input<Goal[]>([]);
}
