import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change color when checked', fakeAsync(() => {
    component.id = 'one';
    fixture.detectChanges();
    const handleSpy = spyOn(component, 'onChange').and.callThrough();
    let myCheckBox = fixture.debugElement.query(By.css('#checkbox-one'));
    myCheckBox.triggerEventHandler('change', { target: { checked: true } });
    tick();
    expect(component.isActive).toBeTrue();
    expect(handleSpy).toHaveBeenCalled();
  }));
});
