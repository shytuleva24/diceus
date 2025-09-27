import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AccountInfo } from '@features/account/components/account-info/account-info';
import { Details } from '@features/account/components/details/details';
import { PerformanceMetrics } from '@features/account/components/performance-metrics/performance-metrics';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountInfo, PerformanceMetrics, Details],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account implements OnInit {
  accountId = signal<string | null>(null);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.accountId.set(id);
    });
  }
}
