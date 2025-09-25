import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

interface NewsItem {
  title: string;
  source: string;
  date: Date;
  summary: string;
  url?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.html',
  styleUrl: './market-intelligence.scss',
})
export class MarketIntelligence {
  title = input<string>('Market Intelligence');
  newsItems = input<NewsItem[]>([]);
  maxItems = input<number>(5);

  openNewsUrl(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}
