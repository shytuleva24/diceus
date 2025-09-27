import { Component, computed, input } from '@angular/core';

import {
  CategoryScale,
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
);

@Component({
  selector: 'app-historical-trend-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './historical-trend-chart.html',
  styleUrl: './historical-trend-chart.scss',
})
export class HistoricalTrendChart {
  readonly data = input<{ label: string; score: number }[]>([]);
  readonly lineChartType = 'line' as const;

  readonly lineChartData = computed<ChartData<'line'>>(() => {
    const inputData = this.data();
    const labels = inputData.map((item) => item.label);
    const dataset = inputData.map((item) => item.score * 100);

    return {
      labels,
      datasets: [
        {
          data: dataset,
          borderColor: '#3b82f6',
          backgroundColor: 'transparent',
          borderWidth: 3,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHitRadius: 8,
          borderCapStyle: 'round',
        },
      ],
    };
  });

  readonly lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed.y;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#C5CAD3',
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: '#3b82f6',
        borderWidth: 3,
        borderCapStyle: 'round',
        tension: 0,
        fill: false,
      },
      point: {
        radius: 0,
        hoverRadius: 4,
        hitRadius: 8,
      },
    },
  };
}
