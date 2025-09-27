import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';
import { SvgIcon } from '../svg-icon/svg-icon';
import 'zone.js';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button, SvgIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
