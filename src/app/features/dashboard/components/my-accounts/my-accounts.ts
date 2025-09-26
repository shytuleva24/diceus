import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SmartCellDirective } from '@core/directives/smart-cell.directive';
import { ACCOUNTS_COLUMNS_DATA, ACCOUNTS_MOCK_DATA } from '@core/models/accounts-data';
import { CurrencyPipe } from '@core/pipes/currency.pipe';

import { SmartTableComponent } from '@shared/table/smart-table.component';
import { Button } from '@shared/ui/button/button';
import { SearchInput } from '@shared/ui/search-input/search-input';

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
  ],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
})
export class MyAccounts {
  title = input<string>('My Accounts');

  rows = signal(ACCOUNTS_MOCK_DATA);
  columns = signal(ACCOUNTS_COLUMNS_DATA);
}
