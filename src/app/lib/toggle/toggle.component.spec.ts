import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the property when it is turned ON/OFF', fakeAsync(() => {
    component.id = 'one';
    fixture.detectChanges();
    const handleSpy = spyOn(component, 'onChange').and.callThrough();
    let myCheckBox = fixture.debugElement.query(By.css('#toggle-one'));
    myCheckBox.triggerEventHandler('change', { target: { checked: true } });
    tick();
    expect(component.isActive).toBeTrue();
    expect(handleSpy).toHaveBeenCalled();
  }));
});
