import { WorkQueueItem } from '@core/types/dashboard.types';
import { ColumnDef } from '@core/types/table.types';

export const WORK_QUEUE_MOCK_DATA: WorkQueueItem[] = [
  {
    originator: 'Sam Masters',
    clientLine: { client: 'NAMEX Tech Solutions', line: 'Cyber Liability' },
    type: 'Underwriter Referral',
    status: 'New',
    created: '2025-04-16',
  },
  {
    originator: 'Annalise Willis',
    clientLine: { client: 'Maritime Logistics Corp', line: 'Marine Cargo' },
    type: 'Underwriter Referral',
    status: 'New',
    created: '2025-04-20',
  },
  {
    originator: 'Patrick Devenport',
    clientLine: { client: 'GreenField Energy Ltd', line: 'Environmental' },
    type: 'Loss Control Request',
    status: 'New',
    created: '2025-04-16',
  },
  {
    originator: 'Ana Killian',
    clientLine: { client: 'NorthStar Financial Group', line: 'D&O Liability' },
    type: 'Underwriter Referral',
    status: 'Pending Review',
    created: '2025-04-22',
  },
  {
    originator: 'Ana Killian',
    clientLine: { client: 'Alliance Healthcare Systems', line: 'Medical Malpractice' },
    type: 'Email',
    status: 'Completed',
    created: '2025-04-28',
  },
  {
    originator: 'Me',
    clientLine: { client: 'QuantumTech Industries', line: 'Product Liability' },
    type: 'Email',
    status: 'Completed',
    created: '2025-04-20',
  },
];

export const WORK_QUEUE_COLUMNS_DATA: ColumnDef[] = [
  { key: 'originator', header: 'ORIGINATOR', width: 210 },
  { key: 'clientLine', header: 'CLIENT/LINE', width: 320 },
  { key: 'type', header: 'TYPE', width: 220 },
  { key: 'status', header: 'STATUS', width: 160 },
  { key: 'created', header: 'CREATED', width: 120, align: 'end' },
];
