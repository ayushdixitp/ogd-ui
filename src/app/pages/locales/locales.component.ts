import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
})
export class LocalesComponent implements OnInit {
  // @Input('refNum') public refNum!: string | null;
  data!: any;
  searchText: string = '';
  locales!: any;
  response: any;
  refNum!: string | null;

  constructor(
    private utilsService: UtilsService,
    private broadcastService: BroadcastService,
    private router: Router,
    private sharedService: SharedService
  ) {
    router.events.subscribe();
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    // if (!this.refNum)
    this.refNum = localStorage.getItem('refNum');
    this.utilsService
      .getDistinctLocale(
        this.refNum,
        localStorage.getItem('experienceType') as string
      )
      .then((data: any) => {
        this.locales = data.locales;
        localStorage.setItem('customerName', data.customerName);
      });
  }

  getSelectedLocale(localeObj: any) {
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.SELECTED_LOCALE_EVENT, localeObj)
    );

    localStorage.setItem('LOCALE', localeObj.locale);
  }
}
