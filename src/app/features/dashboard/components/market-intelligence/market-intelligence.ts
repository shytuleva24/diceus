import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

interface NewsItem {
  headline: string;
  color: string;
}

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.html',
  styleUrl: './market-intelligence.scss',
})
export class MarketIntelligence {
  title = input<string>('Market intelligence');
  newsItems = input<NewsItem[]>([
    {
      headline: 'Rate hardening in Cyber market - +15% YoY',
      color: '#B93B3B',
    },
    {
      headline: 'New capacity entering Marine market',
      color: '#FDD261',
    },
    {
      headline: 'Environmental regulatory changes in CA',
      color: '#1E40AF',
    },
  ]);
}
