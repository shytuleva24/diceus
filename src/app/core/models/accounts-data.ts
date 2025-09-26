import { ColumnDef } from '@core/types/table.types';

export const ACCOUNTS_COLUMNS_DATA: ColumnDef[] = [
  { key: 'account', header: 'ACCOUNT NAME/TYPE', width: 380 },
  { key: 'line', header: 'LINE', width: 160 },
  { key: 'broker', header: 'BROKER', width: 180 },
  { key: 'renewalDate', header: 'RENEWAL DATE', width: 80 },
  { key: 'premium', header: 'PREMIUM', width: 80 },
  { key: 'ratedPremium', header: 'RATED PREMIUM', width: 140, align: 'end' },
  { key: 'lossRatio', header: 'LOSS RATIO', width: 120 },
  { key: 'appetite', header: 'APPETITE', width: 130 },
  { key: 'status', header: 'STATUS', width: 140 },
  { key: 'triage', header: 'TRIAGE', width: 110, align: 'center' },
  { key: 'winnability', header: 'WINNABILITY', width: 200 },
];
