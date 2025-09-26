export interface ColumnDef {
  key: string;
  header: string;
  width?: string | number; // '120px' | 120 | 'minmax(160px,1fr)'
  align?: 'start' | 'center' | 'end';
  sticky?: 'left' | 'right';
}
