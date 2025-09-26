import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { MARKET_INTELLIGENCE_MOCK_DATA } from '@core/models/market-intelligence-data';
import { NewsItem } from '@core/types/dashboard.types';

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.html',
  styleUrl: './market-intelligence.scss',
})
export class MarketIntelligence {
  title = input<string>('Market intelligence');
  newsItems = input<NewsItem[]>(MARKET_INTELLIGENCE_MOCK_DATA);
}
