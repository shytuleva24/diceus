import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { PerformanceMetricsResponse } from '@core/types/performance-metrics.types';

@Injectable({ providedIn: 'root' })
export class WinnabilityGateway {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'https://api.jsonbin.io/v3/b/68d7aa3dd0ea881f408cc5b7';

  getPerformanceMetrics(): Observable<PerformanceMetricsResponse> {
    return this._http
      .get<PerformanceMetricsResponse>(`${this._baseUrl}?meta=false`)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
