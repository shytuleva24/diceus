import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SmartCellDirective } from '@core/directives/smart-cell.directive';
import { CurrencyPipe } from '@core/pipes/currency.pipe';
import { AccountsFacade } from '@core/services/accounts.facade';

import { SmartTableComponent } from '@shared/table/smart-table.component';
import { Button } from '@shared/ui/button/button';
import { SearchInput } from '@shared/ui/search-input/search-input';
import { WinnabilityDots } from '@shared/ui/winnability-dots/winnability-dots';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SmartTableComponent,
    SmartCellDirective,
    CurrencyPipe,
    SearchInput,
    Button,
    WinnabilityDots,
  ],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
})
export class MyAccounts {
  title = input<string>('My Accounts');
  private readonly _facade = inject(AccountsFacade);
  readonly viewModel = this._facade.viewModel;

  updateFilter = (filter: string) => this._facade.updateFilter(filter);
}
