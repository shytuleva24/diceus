import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { WorkQueueItem } from '@core/types/dashboard.types';

@Injectable({ providedIn: 'root' })
export class WorkQueueGateway {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'http://localhost:3001';

  listWorkQueue(): Observable<WorkQueueItem[]> {
    return this._http
      .get<WorkQueueItem[]>(`${this._baseUrl}/workQueue`)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
