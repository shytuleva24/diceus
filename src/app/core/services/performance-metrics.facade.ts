import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { WinnabilityGateway } from '@core/api/gateways/winnability.gateway';

@Injectable()
export class PerformanceMetricsFacade {
  readonly winnability = computed(() => this.performanceMetrics()?.winnability ?? null);
  readonly lossRatio = computed(() => this.performanceMetrics()?.lossRatio ?? null);
  readonly premiumGrowth = computed(() => this.performanceMetrics()?.premiumGrowth ?? null);
  readonly exposureDistribution = computed(
    () => this.performanceMetrics()?.exposureDistribution ?? null,
  );
  private readonly _gateway = inject(WinnabilityGateway);
  private readonly _performanceMetrics$ = this._gateway.getPerformanceMetrics();
  readonly performanceMetrics = toSignal(this._performanceMetrics$);
}
