import { Component, Input, OnInit } from '@angular/core';

import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AnalyticaDataService } from 'src/app/shared/services/analytics-data-service';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { UtilsService } from '../../shared/services/utils.service';

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
    private analyticsDataService: AnalyticaDataService,
    private broadcastService: BroadcastService
  ) {}

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    // this.refNum = 'PHENA0059';
    this.response = this.getDistinctLocale(this.refNum, 'cx');
  }

  getDistinctLocale(refNum: string, experienceType: string) {
    // const url = `v1/configurations/PHENA0059/en_us/cx/web`
    let methodName = this.utilsService.getDistinctLocalesPath(
      refNum,
      experienceType
    );
    this.analyticsDataService
      .publicFirePOSTAPI(methodName, 'chatbot_configurations_api')
      .subscribe((result: any) => {
        this.locales = result.locales;
        this.data = result.locales.map((locale: any) => {
          locale['displayText'] = this.getDisplayText(
            result.customerName,
            locale.locale
          );
        });
        return result;
      });
  }

  getSelectedLocale(localeObj: any) {
    console.log(localeObj);
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.SELECTED_LOCALE, localeObj)
    );
  }

  getDisplayText(customerName: string, locale: string) {
    return `${customerName} ${this.utilsService.formatLocale(locale)}`;
  }
}
