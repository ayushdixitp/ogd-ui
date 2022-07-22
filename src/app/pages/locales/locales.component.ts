import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/services/utils.service';
import { SharedService } from '../../shared/shared.service';

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
    private sharedService: SharedService
  ) {}

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.response = this.getDistinctLocale();
  }

  getDistinctLocale() {
    let experienceType = 'cx';
    let serviceName =
      'v1/customers/' +
      this.refNum +
      '/' +
      experienceType +
      '/distinct-locales';
    // const url = `v1/configurations/PHENA0059/en_us/cx/web`
    this.sharedService
      .publicFirePOSTAPI(serviceName, 'chatbot_configurations_api')
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

  getSelectedLocale(event: any) {
    console.log(event);
  }

  getDisplayText(customerName: string, locale: string) {
    return `${customerName} ${this.utilsService.formatLocale(locale)}`;
  }
}
