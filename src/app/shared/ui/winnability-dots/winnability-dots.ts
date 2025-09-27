import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-winnability-dots',
  standalone: true,
  templateUrl: './winnability-dots.html',
  styleUrl: './winnability-dots.scss',
})
export class WinnabilityDots {
  readonly value = input<string | undefined>('');
  readonly showBorder = input<boolean>(true);
  readonly showLabel = input<boolean>(true);
  readonly dotsCount = input<number>(4);

  readonly dotsArray = computed(() => Array(this.dotsCount()).fill(0));
}
