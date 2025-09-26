import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProgress } from './simple-progress';

describe('SimpleProgress', () => {
  let component: SimpleProgress;
  let fixture: ComponentFixture<SimpleProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
