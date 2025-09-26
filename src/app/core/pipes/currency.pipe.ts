import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '$0';
    }

    const absValue = Math.abs(value);
    const sign = value < 0 ? '-' : '';

    if (absValue >= 1000000000) {
      return `${sign}$${this._formatNumber(absValue / 1000000000)}B`;
    } else if (absValue >= 1000000) {
      return `${sign}$${this._formatNumber(absValue / 1000000)}M`;
    } else if (absValue >= 1000) {
      return `${sign}$${this._formatNumber(absValue / 1000)}K`;
    } else {
      return `${sign}$${absValue}`;
    }
  }

  private _formatNumber(num: number): string {
    const rounded = Math.round(num * 10) / 10;
    return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(1);
  }
}
