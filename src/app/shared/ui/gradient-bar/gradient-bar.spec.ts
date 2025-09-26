import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientBar } from './gradient-bar';

describe('GradientBar', () => {
  let component: GradientBar;
  let fixture: ComponentFixture<GradientBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientBar],
    }).compileComponents();

    fixture = TestBed.createComponent(GradientBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
