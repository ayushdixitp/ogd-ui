import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render current heading and subheading', () => {
    component.botType = 'Career Site Bot';
    component.experienceType = 'Candidate Experience';
    fixture.detectChanges();
    let expType =
      fixture.debugElement.nativeElement.querySelector('#experience-type');
    let botType = fixture.debugElement.nativeElement.querySelector('#bot-type');
    expect(expType.innerText).toBe(component.experienceType);
    expect(botType.innerText).toBe(component.botType);
  });
});
