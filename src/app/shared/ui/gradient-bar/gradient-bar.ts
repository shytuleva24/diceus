import { Component, input } from '@angular/core';

import { GradientStop } from '@core/types/portfolio.types';

@Component({
  selector: 'app-gradient-bar',
  imports: [],
  templateUrl: './gradient-bar.html',
  styleUrl: './gradient-bar.scss',
})
export class GradientBar {
  readonly title = input<string>('');
  readonly width = input<number>(300);
  readonly height = input<number>(30);
  readonly config = input.required<GradientStop[]>();
  readonly percent = input<number>(0);
}
