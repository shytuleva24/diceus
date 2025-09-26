import { Directive, TemplateRef, inject, input } from '@angular/core';

import { SmartCellContext } from '@core/types/ui.types';

/**
 * Directive for defining custom cell templates in smart tables.
 */
@Directive({
  selector: 'ng-template[appSmartCell]',
  standalone: true,
})
export class SmartCellDirective {
  key = input.required<string>({ alias: 'appSmartCell' });

  readonly tpl: TemplateRef<SmartCellContext> = inject(TemplateRef<SmartCellContext>);
}
