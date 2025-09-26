import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AccountRow } from '@core/types/dashboard.types';

@Injectable({ providedIn: 'root' })
export class AccountsGateway {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'https://api.jsonbin.io/v3/b/68d70b3543b1c97be95167b8';

  listAccounts(): Observable<AccountRow[]> {
    return this._http.get<{ accounts: AccountRow[] }>(`${this._baseUrl}?meta=false`).pipe(
      map((response) => response.accounts),
      shareReplay({ bufferSize: 1, refCount: true }),
    );
  }
}
