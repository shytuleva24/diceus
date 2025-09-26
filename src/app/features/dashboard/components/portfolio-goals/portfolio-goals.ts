import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

import { PORTFOLIO_GOALS_MOCK_DATA } from '@core/models';
import { PortfolioGoal } from '@core/types';

import { GradientBar } from '@shared/ui/gradient-bar/gradient-bar';
import { MeterBar } from '@shared/ui/meter-bar/meter-bar';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [CommonModule, GradientBar, MeterBar],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {
  readonly title = input<string>('Portfolio Goals');
  readonly portfolioGoals = signal<PortfolioGoal[]>(PORTFOLIO_GOALS_MOCK_DATA);
}
