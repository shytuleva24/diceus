import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MAIN_NAVIGATION } from '@core/models/navigation-data';

import { Avatar } from '@shared/ui/avatar/avatar';
import { SearchInput } from '@shared/ui/search-input/search-input';

import { Button } from '../ui/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SearchInput, Avatar, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  username = input<string>('');
  openTasks = input<number>(0);

  searchChange = output<string>();

  navItems = signal(MAIN_NAVIGATION);
  search = signal('');

  onSearchChange(value: string): void {
    this.search.set(value);
    this.searchChange.emit(value);
  }
}
