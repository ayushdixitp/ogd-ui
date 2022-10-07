import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initial state of dropdown', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render title of dropdown.', () => {
      let dropdownButton =
        fixture.debugElement.nativeElement.querySelector('#dropdown-title');
      component.title = 'dropdown title';
      fixture.detectChanges();
      expect(dropdownButton.innerText).toEqual(component.title);
    });
  });

  describe('Open state of dropdown', () => {
    it('should open dropdown menu', () => {
      expect(component.isDropdownListVisible).toBeFalse();
      let dropdownButton =
        fixture.debugElement.nativeElement.querySelector('#dropdown');
      dropdownButton.click();
      expect(component.isDropdownListVisible).toBeTrue();
    });
    it('should render list of locales after click on title', () => {
      component.isDropdownListVisible = true;
      component.listOfLocales = [
        {
          locale: 'es_us',
          regionName: 'United States',
          displayText: 'Phenom People ES | US',
          item: 'Phenom People ES | US',
        },
        {
          locale: 'fr_ca',
          regionName: 'Canadian French',
          displayText: 'Phenom People FR | CA',
          item: 'Phenom People FR | CA',
        },
        {
          locale: 'ts_ts',
          regionName: 'Test Locale 1',
          displayText: 'Phenom People TS | TS',
          item: 'Phenom People TS | TS',
        },
        {
          locale: 'ts_ts2',
          regionName: 'Test Locale 2',
          displayText: 'Phenom People TS | TS2',
          item: 'Phenom People TS | TS2',
        },
        {
          locale: 'en_global',
          regionName: 'Global',
          displayText: 'Phenom People EN | GLOBAL',
          item: 'Phenom People EN | GLOBAL',
        },
        {
          locale: 'fr_us',
          regionName: 'United States',
          displayText: 'Phenom People FR | US',
          item: 'Phenom People FR | US',
        },
      ];
      fixture.detectChanges();
      let selectedItem = component.listOfLocales[0];
      let locale = fixture.debugElement.nativeElement.querySelector(
        `#${selectedItem.locale}`
      );
      expect(locale).toBeDefined();
    });

    it('should change the title if any item is selected from dropdown menu', () => {
      component.isDropdownListVisible = true;
      component.listOfLocales = [
        {
          locale: 'es_us',
          regionName: 'United States',
          displayText: 'Phenom People ES | US',
          item: 'Phenom People ES | US',
        },
        {
          locale: 'fr_ca',
          regionName: 'Canadian French',
          displayText: 'Phenom People FR | CA',
          item: 'Phenom People FR | CA',
        },
        {
          locale: 'ts_ts',
          regionName: 'Test Locale 1',
          displayText: 'Phenom People TS | TS',
          item: 'Phenom People TS | TS',
        },
        {
          locale: 'ts_ts2',
          regionName: 'Test Locale 2',
          displayText: 'Phenom People TS | TS2',
          item: 'Phenom People TS | TS2',
        },
        {
          locale: 'en_global',
          regionName: 'Global',
          displayText: 'Phenom People EN | GLOBAL',
          item: 'Phenom People EN | GLOBAL',
        },
        {
          locale: 'fr_us',
          regionName: 'United States',
          displayText: 'Phenom People FR | US',
          item: 'Phenom People FR | US',
        },
      ];
      fixture.detectChanges();
      let selectedItem = component.listOfLocales[0];
      let locale = fixture.debugElement.nativeElement.querySelector(
        `#${selectedItem.locale}`
      );
      locale.click(selectedItem);
      component.title;
      expect(component.title).toBe(selectedItem.displayText);
    });
  });
});
