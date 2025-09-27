export interface CallToAction {
  text: string;
  href: string;
}

export interface WinnabilityData {
  label: string;
  status: string;
  rating: number;
  ratingMax: number;
  cta: CallToAction;
}

export interface LossRatioData {
  label: string;
  value: number;
  display: string;
  target: number;
  targetDisplay: string;
  comparison: string;
  cta: CallToAction;
}

export interface PremiumGrowthData {
  label: string;
  value: number;
  display: string;
  note: string;
  current: number;
  currentDisplay: string;
  target: number;
  targetDisplay: string;
  comparison: string;
  cta: CallToAction;
}

export interface ExposureDistributionItem {
  name: string;
  value: number;
  display: string;
}

export interface ExposureDistributionData {
  label: string;
  items: ExposureDistributionItem[];
}

export interface PerformanceMetricsResponse {
  winnability: WinnabilityData;
  lossRatio: LossRatioData;
  premiumGrowth: PremiumGrowthData;
  exposureDistribution: ExposureDistributionData;
}
