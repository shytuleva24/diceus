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
  templateUrl: './smart-table.html',
  styleUrl: './smart-table.scss',
})
export class SmartTable<T> {
  cellTemplates = contentChildren(SmartCellDirective);

  data = input<T[]>([]);
  columns = input<ColumnDef[]>([]);
  trackBy = input<((index: number, row: T) => unknown) | null>(null);
  stickyHeader = input<boolean>(true);
  density = input<'compact' | 'regular'>('compact');

  rowClick = output<T>();

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

  onRowClick(row: T) {
    this.rowClick.emit(row);
  }
}
