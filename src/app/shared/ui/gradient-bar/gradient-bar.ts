import { Component, computed, input } from '@angular/core';

import { GradientStop } from '@core/types/portfolio.types';

@Component({
  selector: 'app-gradient-bar',
  imports: [],
  templateUrl: './gradient-bar.html',
  styleUrl: './gradient-bar.scss',
})
export class GradientBar {
  readonly title = input<string>('');
  readonly width = input<number>(238);
  readonly height = input<number>(30);
  readonly config = input.required<GradientStop[]>();
  readonly percent = input<number>(0);

  readonly stops = computed(() => this.config());
  readonly value = computed(() => this.percent());

  readonly segments = computed(() => {
    const stops = this.stops();
    if (stops.length === 0) return [];

    const segments = [];
    let prevStop = 0;

    for (let i = 0; i < stops.length; i++) {
      const currentStop = stops[i];
      const segmentWidth = ((currentStop.stop - prevStop) * this.width()) / 100;
      const x = (prevStop * this.width()) / 100;

      segments.push({
        color: currentStop.color,
        x: x,
        width: segmentWidth,
        isFirst: i === 0,
        isLast: i === stops.length - 1,
      });

      prevStop = currentStop.stop;
    }

    return segments;
  });
}
