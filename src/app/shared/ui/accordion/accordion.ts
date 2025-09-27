import { Component, signal } from '@angular/core';

import { ACCORDION_SECTIONS, AccordionSection } from '@core/models/accordion.data';

@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  readonly sections = signal<AccordionSection[]>(ACCORDION_SECTIONS);

  toggle(id: string) {
    this.sections.update((list) =>
      list.map((s) => ({
        ...s,
        open: s.id === id ? !s.open : false,
      })),
    );
  }
}
