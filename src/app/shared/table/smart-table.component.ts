import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  computed,
  contentChildren,
  input,
  output,
} from '@angular/core';

import { SmartCellDirective } from '@core/directives/smart-cell.directive';
import { ColumnDef } from '@core/types/table.types';
import { SmartCellContext } from '@core/types/ui.types';

import { SvgIcon } from '@shared/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-smart-table',
  standalone: true,
  imports: [CommonModule, CdkTableModule, SvgIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './smart-table.component.html',
  styleUrl: './smart-table.component.scss',
})
export class SmartTableComponent {
  cellTemplates = contentChildren(SmartCellDirective);

  data = input<unknown[]>([]);
  columns = input<ColumnDef[]>([]);
  trackBy = input<((index: number, row: unknown) => unknown) | null>(null);
  stickyHeader = input<boolean>(true);
  density = input<'compact' | 'regular'>('compact');

  rowClick = output<unknown>();

  colKeys = computed(() => this.columns().map((col) => col.key));
  allColKeys = computed(() => [...this.colKeys(), 'actions']);

  cellTemplatesDictionary = computed(() => {
    return this.cellTemplates().reduce(
      (acc, car) => {
        acc[car.key()] = car.tpl;
        return acc;
      },
      {} as Record<string, TemplateRef<SmartCellContext>>,
    );
  });

  getTrackByFn() {
    return this.trackBy() || ((i: number) => i);
  }

  onRowClick(row: unknown) {
    this.rowClick.emit(row);
  }
}
