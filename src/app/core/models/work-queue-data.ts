import { ColumnDef } from '@core/types/table.types';

export const WORK_QUEUE_COLUMNS_DATA: ColumnDef[] = [
  { key: 'originator', header: 'ORIGINATOR', width: 210 },
  { key: 'clientLine', header: 'CLIENT/LINE', width: 320 },
  { key: 'type', header: 'TYPE', width: 220 },
  { key: 'status', header: 'STATUS', width: 160 },
  { key: 'created', header: 'CREATED', width: 120, align: 'end' },
];
