import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
})
export class MyAccounts {
  title = input<string>('My Accounts');
}
