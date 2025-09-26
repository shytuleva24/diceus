export interface GradientStop {
  color: string;
  stop: number; // 0–100 (%)
}

export interface GradientGoal {
  type: 'gradient';
  title: string;
  config: GradientStop[];
  percent: number;
}

export interface MeterGoal {
  type: 'meter';
  title: string;
  percent: number;
  goal: string;
  passed: string;
}

export type PortfolioGoal = GradientGoal | MeterGoal;
