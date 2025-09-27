import { ComponentFixture, TestBed } from '@angular/core/testing';

import 'zone.js';
import { WinnabilityDots } from './winnability-dots';

describe('WinnabilityDots', () => {
  let component: WinnabilityDots;
  let fixture: ComponentFixture<WinnabilityDots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityDots],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnabilityDots);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.value()).toBe('');
    expect(component.showBorder()).toBe(true);
    expect(component.showLabel()).toBe(true);
    expect(component.dotsCount()).toBe(4);
  });

  it('should render dots with border and label by default', () => {
    fixture.componentRef.setInput('value', 'Test Value');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const container = compiled.querySelector('.winn');
    const dots = compiled.querySelectorAll('.dot.dot--winn');
    const label = compiled.querySelector('.winn__label');

    expect(container).toHaveClass('pill');
    expect(container).toHaveClass('pill--triage');
    expect(dots.length).toBe(4);
    expect(label?.textContent?.trim()).toBe('Test Value');
  });

  it('should render dots without border when showBorder is false', () => {
    fixture.componentRef.setInput('showBorder', false);
    fixture.componentRef.setInput('value', 'Test Value');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const container = compiled.querySelector('.winn');

    expect(container).not.toHaveClass('pill');
    expect(container).not.toHaveClass('pill--triage');
  });

  it('should not render label when showLabel is false', () => {
    fixture.componentRef.setInput('showLabel', false);
    fixture.componentRef.setInput('value', 'Test Value');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const label = compiled.querySelector('.winn__label');

    expect(label).toBeNull();
  });

  it('should render custom number of dots', () => {
    fixture.componentRef.setInput('dotsCount', 6);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const dots = compiled.querySelectorAll('.dot.dot--winn');

    expect(dots.length).toBe(6);
  });

  it('should render only dots when both showBorder and showLabel are false', () => {
    fixture.componentRef.setInput('showBorder', false);
    fixture.componentRef.setInput('showLabel', false);
    fixture.componentRef.setInput('dotsCount', 3);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const container = compiled.querySelector('.winn');
    const dots = compiled.querySelectorAll('.dot.dot--winn');
    const label = compiled.querySelector('.winn__label');

    expect(container).not.toHaveClass('pill');
    expect(container).not.toHaveClass('pill--triage');
    expect(dots.length).toBe(3);
    expect(label).toBeNull();
  });
});
