import { Component, inject } from '@angular/core';

import { PerformanceMetricsFacade } from '@core/services/performance-metrics.facade';

import { MeterBar } from '@shared/ui/meter-bar/meter-bar';

@Component({
  selector: 'app-performance-metrics',
  imports: [MeterBar],
  templateUrl: './performance-metrics.html',
  styleUrl: './performance-metrics.scss',
  providers: [PerformanceMetricsFacade],
})
export class PerformanceMetrics {
  private readonly _facade = inject(PerformanceMetricsFacade);

  readonly winnability = this._facade.winnability;
  readonly lossRatio = this._facade.lossRatio;
  readonly premiumGrowth = this._facade.premiumGrowth;
  readonly exposureDistribution = this._facade.exposureDistribution;

  getWinnabilityStatus(): string {
    return this.winnability()?.status ?? '';
  }

  getLossRatioDisplay(): string {
    return this.lossRatio()?.display ?? '';
  }

  getPremiumGrowthDisplay(): string {
    return this.premiumGrowth()?.display ?? '';
  }

  getExposureItems() {
    return this.exposureDistribution()?.items ?? [];
  }
}
