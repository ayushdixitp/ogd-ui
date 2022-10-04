import {
  Component,
  Input,
  OnInit,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { DropdownItem } from 'src/app/shared/interfaces/dropdown.interface';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() id!: string;
  @Input() listOfLocales: Array<DropdownItem> = [
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
  locale!: string | null;

  @HostListener('window:click', ['$event.target']) onWindowClick(e: any) {
    // if condition to if check if click is happened outside or not
    if (e.id != 'dropdown') {
      if (this.isDropdownListVisible) {
        this.isDropdownListVisible = !this.isDropdownListVisible;
      }
    }
  }

  title!: string;
  isDropdownListVisible: boolean = false;
  selectedItem!: FormGroup;

  constructor(private broadcastService: BroadcastService) {}

  ngOnInit(): void {
    this.locale = localStorage.getItem('locale');
    this.listOfLocales?.forEach(localeItem => {
      if (localeItem.locale == this.locale) {
        this.title = localeItem.item;
      }
    });
    this.selectedItem = new FormGroup({
      name: new FormControl(this.title, [Validators.required]),
    });
    this.broadcastService
      .on(AppEventType.DROPDOWN_EVENT)
      .subscribe((event: any) => {
        if (event.payload.data.id == this.id) {
          this.isDropdownListVisible = !this.isDropdownListVisible;
        } else {
          this.isDropdownListVisible = false;
        }
      });
  }

  ngOnChanges(): void {
    this.title = this.listOfLocales ? this.listOfLocales[0]?.item : '';
    this.selectedItem = new FormGroup({
      name: new FormControl(this.title, [Validators.required]),
    });
    this.broadcastService
      .on(AppEventType.DROPDOWN_EVENT)
      .subscribe((event: any) => {
        if (event.payload.data.id == this.id) {
          this.isDropdownListVisible = !this.isDropdownListVisible;
        } else {
          this.isDropdownListVisible = false;
        }
      });
  }

  selectOption(selectedItem: DropdownItem) {
    this.isDropdownListVisible = !this.isDropdownListVisible;
    this.title = selectedItem.item;
    this.selectedItem.patchValue({ name: selectedItem.item });
    localStorage.setItem('locale', selectedItem?.locale);
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.CLICKED_ON_LOCALE_DROPDOWN, {
        name: AppEventType.CLICKED_ON_LOCALE_DROPDOWN,
        data: { selectedItem },
      })
    );
    localStorage.setItem('locale', selectedItem?.locale);
  }

  onTitleClick() {
    this.isDropdownListVisible = !this.isDropdownListVisible;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.DROPDOWN_EVENT, {
        name: AppEventType.DROPDOWN_EVENT,
        data: { id: this.id },
      })
    );
  }
}
