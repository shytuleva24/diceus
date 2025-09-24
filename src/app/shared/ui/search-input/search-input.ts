import { Component, forwardRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInput),
      multi: true
    }
  ],
  host: {
    '[style.--search-input-height]': 'height()'
  }
})
export class SearchInput implements ControlValueAccessor {
  height = input<string>('28px');
  showBorder = input<boolean>(false);
  placeholder = input<string>('Search');
  testId = input<string>('search-input');

  value = '';
  disabled = false;

  onChange: (value: string) => void = () => {
    // This is intentionally empty and will be overwritten by registerOnChange
  };
  onTouched: () => void = () => {
    // This is intentionally empty and will be overwritten by registerOnTouched
  };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
