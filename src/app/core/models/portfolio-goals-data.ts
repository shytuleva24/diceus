export const PORTFOLIO_GOALS_MOCK_DATA = [
  {
    type: 'gradient' as const,
    title: 'Portfolio loss ratio target',
    config: [
      { color: '#4CAF50', stop: 39 },
      { color: '#FFEB3B', stop: 60 },
      { color: '#F44336', stop: 100 },
    ],
    percent: 48.2,
  },
  {
    type: 'gradient' as const,
    title: 'Renewal retention',
    config: [
      { color: '#F44336', stop: 20 },
      { color: '#FFEB3B', stop: 55 },
      { color: '#4CAF50', stop: 65 },
      { color: '#FFEB3B', stop: 100 },
    ],
    percent: 48.2,
  },
  {
    type: 'meter' as const,
    title: 'NEW BUSINESS TARGET',
    percent: 67,
    goal: '$12M',
    passed: '$8.1M',
  },
  {
    type: 'meter' as const,
    title: 'ANNUAL GWP TARGET',
    percent: 68,
    goal: '$42M',
    passed: '$28.4M',
  },
];
