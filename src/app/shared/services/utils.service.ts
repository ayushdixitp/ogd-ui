import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    pageId: string | null
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (url && pageId) {
        this.httpService
          .httpGet(url, 'chatbot_configurations_api')
          .subscribe((response) => {
            resolve(response);
          });
      }
    });
  }

  getRequiredSkeleton() {}

  getDistinctLocalesPath(): string {
    return `v2/customers/locales`;
  }

  getChatbotConfigurationsPath(): string {
    return `v1/configurations`;
  }

  getResetChatbotConfigurationsPath() {
    return `v1/configurations/reset`;
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
    let methodName = this.getDistinctLocalesPath();
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('x-ph-refNum', `${refNum}`)
      .set('experience-type', `${experienceType}`);
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
