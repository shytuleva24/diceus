import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { SvgIcon } from '@shared/ui/svg-icon/svg-icon';

export type DriverTheme = 'green' | 'yellow' | 'red';

export interface DriverItem {
  rank?: number;
  name: string;
  value: number;
  delta?: number;
  deltaDisplay?: string;
}

@Component({
  selector: 'app-driver-list',
  standalone: true,
  templateUrl: './driver-list.html',
  styleUrl: './driver-list.scss',
  imports: [NgClass, SvgIcon],
})
export class DriverList {
  readonly title = input<string>('');
  readonly theme = input<DriverTheme>('green');
  readonly icon = input<'up' | 'down' | null>(null);
  readonly items = input<DriverItem[]>([]);

  readonly normalized = computed<Required<DriverItem>[]>(() =>
    (this.items() ?? []).map((it, i) => {
      const value = Math.max(0, Math.min(1, it.value ?? 0));
      const rank = it.rank ?? i + 1;
      const deltaDisplay =
        it.deltaDisplay ??
        (typeof it.delta === 'number'
          ? `${it.delta > 0 ? '+' : ''}${Math.round(it.delta * 100)}%`
          : '');
      return { name: it.name, value, rank, delta: it.delta ?? 0, deltaDisplay };
    }),
  );
}
