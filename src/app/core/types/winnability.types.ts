export interface Rating {
  label: string;
  value: number;
  max: number;
}

export interface Summary {
  overallScore: number;
  display: string;
  rating: Rating;
}

export interface HistoricalTrendItem {
  label: string;
  score: number;
}

export interface PositionItem {
  label: string;
  value: number;
}

export interface DriverItem {
  rank: number;
  name: string;
  value: number;
  delta: number;
  deltaDisplay: string;
}

export interface DriversSection {
  title: string;
  items: DriverItem[];
}

export interface Drivers {
  increasing: DriversSection;
  decreasing: DriversSection;
}

export interface CallToAction {
  text: string;
  href: string;
}

export interface Recommendation {
  id: string;
  title: string;
  body: string;
  cta: CallToAction;
}

export interface AccountDetails {
  title: string;
  summary: Summary;
  historicalTrend: HistoricalTrendItem[];
  position: PositionItem[];
  drivers: Drivers;
  recommendations: Recommendation[];
}

export interface WinnabilityResponse {
  accountDetails: AccountDetails;
}
