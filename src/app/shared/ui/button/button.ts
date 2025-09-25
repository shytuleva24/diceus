import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIcon } from '../svg-icon/svg-icon';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'apply';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, SvgIcon],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  buttonType = input<ButtonType>('primary');
  disabled = input<boolean>(false);
  active = input<boolean | undefined>(false);

  // Icon properties
  iconId = input<string | undefined>(undefined);
  iconWidth = input<string | undefined>('24px');
  iconHeight = input<string | undefined>('24px');
  text = input<string | undefined>(undefined);
}
