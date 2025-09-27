import { ComponentFixture, TestBed } from '@angular/core/testing';

import 'zone.js';
import { HistoricalTrendChart } from './historical-trend-chart';

describe('HistoricalTrendChart', () => {
  let component: HistoricalTrendChart;
  let fixture: ComponentFixture<HistoricalTrendChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalTrendChart],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricalTrendChart);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update chart data when input changes', () => {
    const testData = [
      { label: 'Jan', score: 0.75 },
      { label: 'Feb', score: 0.8 },
      { label: 'Mar', score: 0.85 },
    ];

    fixture.componentRef.setInput('data', testData);
    fixture.detectChanges();

    expect(component.lineChartData().labels).toEqual(['Jan', 'Feb', 'Mar']);
    expect(component.lineChartData().datasets[0].data).toEqual([75, 80, 85]);
  });

  it('should have sharp lines (tension = 0)', () => {
    expect(component.lineChartOptions?.elements?.line?.tension).toBe(0);

    const testData = [{ label: 'Jan', score: 0.75 }];
    fixture.componentRef.setInput('data', testData);
    fixture.detectChanges();

    expect(component.lineChartData().datasets[0].tension).toBe(0);
  });
});
