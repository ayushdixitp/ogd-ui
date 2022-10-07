import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title which is input to it.', () => {
    component.label = 'Button label';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('#btn-text');
    expect(button.innerText).toBe(component.label);
  });

  it('should emit an event when it is clicked', () => {
    component.label = 'Button label';
    spyOn(component.onClick, 'emit');
    const button =
      fixture.debugElement.nativeElement.querySelector('#btn-text');
    button.click();
    fixture.detectChanges();
    expect(component.onClick.emit).toHaveBeenCalledWith({
      data: { label: component.label },
    });
  });
});
