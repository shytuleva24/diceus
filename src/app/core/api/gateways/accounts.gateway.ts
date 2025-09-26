import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { AccountRow } from '@core/types/dashboard.types';

@Injectable({ providedIn: 'root' })
export class AccountsGateway {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'http://localhost:3001';

  listAccounts(): Observable<AccountRow[]> {
    return this._http
      .get<AccountRow[]>(`${this._baseUrl}/accounts`)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
