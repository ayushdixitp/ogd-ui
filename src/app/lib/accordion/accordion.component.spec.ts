import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { By } from '@angular/platform-browser';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    // jasmine.clock().install();
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent],
      imports: [RouterTestingModule.withRoutes([]), SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.experienceType = 'CMP_CANDIDATE_EXPERIENCE';
    component.svg =
      "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.75 0.75H1.25C0.973437 0.75 0.75 0.973437 0.75 1.25V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V1.25C13.25 0.973437 13.0266 0.75 12.75 0.75ZM1.875 1.875H4V12.125H1.875V1.875ZM12.125 12.125H5V5H12.125V12.125ZM5 4V1.875H12.125V4H5Z' fill='#1C2024'/></svg>";
    component.pages = [
      {
        pageId: 'career-site-bot',
        channel: 'web',
        heading: 'CMP_CAREERS_SITE_BOT',
      },
      {
        pageId: 'candidate-facebook-bot',
        channel: 'facebook',
        heading: 'CMP_FACEBOOK_BOT',
      },
      {
        pageId: 'candidate-sms-bot',
        channel: 'sms',
        heading: 'CMP_SMS_BOT',
      },
    ];
    component.id = 'cx';
    component.defaultPageId = 'career-site-bot';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open first accordion by default.', () => {
    let accodionItemList = fixture.debugElement.query(By.css('#accodion-item'));
    expect(accodionItemList).toBeTruthy();
  });

  it('should close accordion when clicked on same accordion if it is open.', () => {
    const accorion = fixture.debugElement.query(By.css('#accordion'));
    accorion.triggerEventHandler('click');
    fixture.detectChanges();
    let accodionItemList = fixture.debugElement.query(By.css('#accodion-item'));
    expect(accodionItemList).toBeFalsy();
  });

  it('should get close when other accodion is clicked.', () => {
    component.id = 'second-accordion';
    const accorion = fixture.debugElement.query(By.css('#accordion'));
    accorion.triggerEventHandler('click');
    fixture.detectChanges();
    let accodionItemList = fixture.debugElement.query(By.css('#accodion-item'));
    expect(accodionItemList).toBeFalsy();
  });
});
