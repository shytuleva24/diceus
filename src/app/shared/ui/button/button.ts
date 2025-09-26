import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { ButtonType } from '@core/types/ui.types';

import { SvgIcon } from '@shared/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, SvgIcon],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  buttonType = input<ButtonType>('primary');
  disabled = input<boolean>(false);
  active = input<boolean | undefined>(false);
  isSmall = input<boolean | undefined>(false);

  // Icon properties
  iconId = input<string | undefined>(undefined);
  iconWidth = input<string | undefined>('24px');
  iconHeight = input<string | undefined>('24px');
  text = input<string | undefined>(undefined);
}
