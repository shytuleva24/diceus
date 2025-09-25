import { Component } from '@angular/core';

import { MarketIntelligence } from '@features/dashboard/components/market-intelligence/market-intelligence';
import { MyAccounts } from '@features/dashboard/components/my-accounts/my-accounts';
import { PortfolioGoals } from '@features/dashboard/components/portfolio-goals/portfolio-goals';
import { QuickActions } from '@features/dashboard/components/quick-actions/quick-actions';
import { WorkQueue } from '@features/dashboard/components/work-queue/work-queue';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WorkQueue, PortfolioGoals, QuickActions, MarketIntelligence, MyAccounts],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
