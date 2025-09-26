import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { WorkQueueItem } from '@core/types/dashboard.types';

@Injectable({ providedIn: 'root' })
export class WorkQueueGateway {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'https://api.jsonbin.io/v3/b/68d70d2643b1c97be951696a';

  listWorkQueue(): Observable<WorkQueueItem[]> {
    return this._http.get<{ workQueue: WorkQueueItem[] }>(`${this._baseUrl}?meta=false`).pipe(
      map((response) => response.workQueue),
      shareReplay({ bufferSize: 1, refCount: true }),
    );
  }
}
