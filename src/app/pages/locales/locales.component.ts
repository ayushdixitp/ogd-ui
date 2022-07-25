import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
})
export class LocalesComponent implements OnInit {
  response: any = {
    customerName: 'Phenom',
    locales: [
      {
        locale: 'en_US',
      },
      {
        locale: 'en_FR',
      },
      {
        locale: 'en_UK',
      },
      {
        locale: 'en_IR',
      },
      {
        locale: 'en_FR',
      },
      {
        locale: 'en_UK',
      },
      {
        locale: 'en_IR',
      },
    ],
  };
  data!: any;
  searchText: string = '';
  locales!: any;

  constructor(private utilsService: UtilsService) {}
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.data = this.response.locales.map((locale: any) => {
      locale['displayText'] = this.getDisplayText(
        this.response.customerName,
        locale.locale
      );
      return this.getDisplayText(this.response.customerName, locale.locale);
    });
    console.log(this.data);
    this.locales = this.response.locales;
    console.log(this.locales);
  }

  getSelectedLocale(event: any) {
    console.log(event);
  }

  getDisplayText(customerName: string, locale: string) {
    return `${customerName} ${this.utilsService.formatLocale(locale)}`;
  }
}
