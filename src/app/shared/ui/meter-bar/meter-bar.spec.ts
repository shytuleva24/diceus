import { ComponentFixture, TestBed } from '@angular/core/testing';

import 'zone.js';
import { MeterBar } from './meter-bar';

describe('MeterBar', () => {
  let component: MeterBar;
  let fixture: ComponentFixture<MeterBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeterBar],
    }).compileComponents();

    fixture = TestBed.createComponent(MeterBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
