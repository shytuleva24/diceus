export interface NewsItem {
  headline: string;
  color: string;
}

export interface Goal {
  name: string;
  currentValue: number;
  targetValue: number;
  unit?: string;
}

export interface Account {
  name: string;
  type: string;
}

export interface AccountRow {
  id: string;
  account: Account;
  line: string;
  broker: string;
  renewalDate: string;
  premium: number;
  ratedPremium: number;
  lossRatio: number;
  appetite: 'high' | 'medium' | 'cautious';
  status: string;
  triage: number;
  winnability: string;
}

export interface ClientLine {
  client: string;
  line: string;
}

export interface WorkQueueItem {
  id: string;
  originator: string;
  clientLine: ClientLine;
  type: string;
  status: string;
  created: string;
}
