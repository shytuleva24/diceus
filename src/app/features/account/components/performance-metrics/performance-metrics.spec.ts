import { ComponentFixture, TestBed } from '@angular/core/testing';

import 'zone.js';
import { PerformanceMetrics } from './performance-metrics';

// eslint-disable-next-line import/order
import { provideHttpClient } from '@angular/common/http';

describe('PerformanceMetrics', () => {
  let component: PerformanceMetrics;
  let fixture: ComponentFixture<PerformanceMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMetrics],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformanceMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
