import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class Avatar {
  name = input<string>('');
  size = input<string>('40px');
  testId = input<string>('avatar');

  initials = computed(() => {
    if (!this.name()) {
      return '';
    }
    const fullName = this.name().trim();
    if (!fullName) return '';

    const nameParts = fullName.split(/\s+/);

    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    } else {
      return nameParts
        .map((part) => part.charAt(0))
        .join('')
        .toUpperCase();
    }
  });
}
