import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private httpService: HttpService) {}

  formatLocale(locale: string) {
    return locale.toUpperCase().split('_').join(' | ');
  }

  checkIfCustomerIsProvisioned(
    url: string | undefined,
    pageId: string | undefined
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (url && pageId) {
        this.httpService
          .httpGet(url, 'chatbot_configurations_api')
          .subscribe(response => {
            resolve(response);
          });
      }
    });
  }

  getRequiredSkeleton() {}

  getDistinctLocalesPath(
    refNum: string | null,
    experienceType: string | null
  ): string {
    return `v1/customers/${refNum}/${experienceType}/distinct-locales`;
  }

  getChatbotConfigurationsPath(
    refNum: string | null,
    locale: string | null,
    experienceType: string | null,
    channel: string | null
  ): string {
    return `v1/configurations/${refNum}/${locale}/${experienceType}/${channel}`;
  }

  getDropdownFormatList(list: [], keyToBeDisplay: string) {
    list.map((listItem: any) => {
      listItem['item'] = listItem[keyToBeDisplay];
      return { listItem, ...listItem };
    });
    return list;
  }

  getDisplayText(customerName: string, locale: string) {
    return `${customerName} ${this.formatLocale(locale)}`;
  }

  getDistinctLocale(refNum: string | null, experienceType: string) {
    // const url = `v1/configurations/PHENA0059/en_us/cx/web`
    let methodName = this.getDistinctLocalesPath(refNum, experienceType);
    return new Promise((resolve, reject) => {
      this.httpService
        .httpGet(methodName, 'chatbot_configurations_api')
        .subscribe((result: any) => {
          const data = result.locales.map((locale: any) => {
            locale['displayText'] = this.getDisplayText(
              result.customerName,
              locale.locale
            );
          });
          resolve(result);
        });
    });
  }
}
