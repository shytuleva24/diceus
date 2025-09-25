import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class Avatar {
  initials = input<string>('');
  size = input<string>('40px');
  testId = input<string>('avatar');
}
