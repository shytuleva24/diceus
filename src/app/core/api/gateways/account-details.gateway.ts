import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { WinnabilityResponse } from '@core/types/winnability.types';

@Injectable({ providedIn: 'root' })
export class AccountDetailsGateway {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'https://api.jsonbin.io/v3/b/68d7cfe6d0ea881f408ce2f5';

  getWinnabilityData(): Observable<WinnabilityResponse> {
    return this._http
      .get<WinnabilityResponse>(`${this._baseUrl}?meta=false`)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
