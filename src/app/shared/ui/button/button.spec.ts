import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Button } from './button';
import { SvgIcon } from '../svg-icon/svg-icon';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button, SvgIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have primary class by default', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.classList.contains('btn-primary')).toBeTruthy();
  });

  it('should apply the correct class based on buttonType input', () => {
    // Set the buttonType to secondary
    fixture.componentRef.setInput('buttonType', 'secondary');
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.classList.contains('btn-secondary')).toBeTruthy();
  });

  it('should display the text from tectButton input', () => {
    const testText = 'Test Button';
    fixture.componentRef.setInput('textButton', testText);
    fixture.detectChanges();

    const textElement = fixture.debugElement.query(By.css('.btn-text')).nativeElement;
    expect(textElement.textContent).toBe(testText);
  });

  it('should be disabled when disabled input is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBeTruthy();
  });
});
