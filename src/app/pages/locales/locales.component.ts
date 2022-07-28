import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AnalyticaDataService } from 'src/app/shared/services/analytics-data-service';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { UtilsService } from '../../shared/services/utils.service';
HttpService;

@Component({
  selector: 'locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
})
export class LocalesComponent implements OnInit {
  @Input('refNum') public refNum!: string;
  data!: any;
  searchText: string = '';
  locales!: any;
  response: any;

  constructor(
    private utilsService: UtilsService,
    private httpService: HttpService,
    private broadcastService: BroadcastService,
    private router: Router
  ) {
    router.events.subscribe();
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.refNum = 'PHENA0059';
    this.utilsService
      .getDistinctLocale(this.refNum, 'cx')
      .then((data: any) => (this.locales = data.locales));
  }

  getSelectedLocale(localeObj: any) {
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.SELECTED_LOCALE, localeObj)
    );
    // TODO: has to be removed,, move them in constant
    this.router.navigate(['/career-site-bot']);
  }
}
