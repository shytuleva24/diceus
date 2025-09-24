import { CommonModule } from '@angular/common';
import { Component, signal, output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchInput } from '../ui/search-input/search-input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchInput
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  username = input<string>('');
  openTasks = input<number>(0);
  initials = input<string>('');

  search = signal('');
  searchChange = output<string>();

  onSearchChange(value: string): void {
    this.search.set(value);
    this.searchChange.emit(value);
  }
}
