import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
})
export class LocalesComponent implements OnInit {
  response = {
    customerName: 'Phenom',
    locales: [
      {
        locale: 'en_US',
        displayText: 'Phenom EN US',
      },
      {
        locale: 'en_FR',
      },
    ],
  };
  data!: any;

  constructor() {}

  ngOnInit(): void {
    this.data = this.response.locales.map(o => {
      return this.getDisplayText(this.response.customerName, o.locale);
    });
    console.log(this.data);
  }

  getSelectedLocale(event: any) {
    console.log(event);
  }

  getDisplayText(customerName: string, locale: string) {
    return `${customerName} ${this.formatLocale(locale)}`;
  }

  formatLocale(locale: string) {
    return locale.toUpperCase().split('_').join(' ');
  }
}
