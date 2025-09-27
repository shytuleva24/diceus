export interface AccordionItem {
  id?: string;
  text: string;
  href?: string;
}

export interface AccordionSection {
  id: string;
  title: string;
  count: number;
  open: boolean;
  items: AccordionItem[];
}

export const ACCORDION_SECTIONS: AccordionSection[] = [
  {
    id: 'decision-support',
    title: 'Decision Support',
    count: 4,
    open: true,
    items: [
      { text: 'Winnability', href: '#winnability' },
      { text: 'Exposure Review & Suggested Coverage', href: '#exposure-review' },
      { text: 'Portfolio Strategy Alignment', href: '#portfolio-alignment' },
      { text: 'Broker Analytics', href: '#broker-analytics' },
    ],
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    count: 6,
    open: false,
    items: [
      { text: 'Claims History Overview', href: '#claims-history' },
      { text: 'Loss Ratio Trend (3y)', href: '#loss-trend' },
      { text: 'Catastrophe Exposure Map', href: '#cat-exposure' },
      { text: 'OSHA Violations Check', href: '#osha-check' },
      { text: 'Financial Health (Altman Z)', href: '#financial-health' },
      { text: 'Safety Controls & Compliance Score', href: '#safety-score' },
    ],
  },
  {
    id: 'documents-compliance',
    title: 'Documents and Compliance',
    count: 2,
    open: false,
    items: [
      { text: 'Policy Docs & Endorsements', href: '#policy-docs' },
      { text: 'Certificates & COIs', href: '#certificates' },
    ],
  },
];
