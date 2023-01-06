import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SidebarBase } from './components/sidebar/sidebar-base';
import { CommonConstant } from './constants/common-constants';
import { HttpService } from './services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sidebarConfigs: any;
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getDashboardSchema(pageId?: string | null): Observable<any> {
    // const url = `v1/dashboard-schema${pageId}`;
    const url = `${environment.dashboardSchema}${pageId}`;
    return this.httpService.httpGet(url, 'chatbot_management_api');
  }

  getDashboardSchemaFromLocale(pageId?: string | null): Observable<any> {
    const url = `${
      environment.dashboardSchema
    }/json${pageId}.json?v=${Date.now()}`;
    return this.httpClient.get(url);
    // for running local cdn
    // const url = `../../assets/dashboard-skeleton${pageId}.json`;
    // return this.httpClient.get(url);
  }

  getSidebarData(): Observable<any> {
    let url: string = 'v1/customers/experiences';
    // change service name
    return this.httpService.httpGet(url, 'chatbot_configurations_api');
  }

  getI18nValues() {
    let locale = localStorage.getItem('LOCALE')?.split('_')[0];
    // add list of available locales.
    const supportedLocales = ['en', 'fr', 'es', 'nl', 'de'];
    if (supportedLocales.includes(locale as string)) {
      return this.httpClient.get(
        `https://cdn-bot.phenompeople.com/translations/cmp-translations-${locale}.json?v=${Date.now()}`
      );
    } else {
      return this.httpClient.get(
        `https://cdn-bot.phenompeople.com/translations/cmp-translations-en.json?v=${Date.now()}`
      );
    }
  }

  setDefaultValues() {
    this.getSidebarData().subscribe(data => {
      if (
        (localStorage.getItem('roleAccess') as string) ==
        CommonConstant.INTERNAL
      ) {
        this.sidebarConfigs = new SidebarBase(data.masterPipeline).finalArray;
      } else {
        this.sidebarConfigs = new SidebarBase(
          data?.customerPipeline
        ).finalArray;
      }

      localStorage.setItem(
        'pageId',
        this.sidebarConfigs[0]?.channels[0]?.pageId
      );
      localStorage.setItem(
        'experienceType',
        this.sidebarConfigs[0]?.experienceType
      );
      localStorage.setItem(
        'channel',
        this.sidebarConfigs[0]?.channels[0]?.channel
      );
    });
  }

  removeScroll() {
    let body = document.body;
    body.style.height = '100vh';
    body.style.overflow = 'hidden';
  }

  addSCroll() {
    let body = document.body;
    body.style.height = 'initial';
    body.style.overflow = 'initial';
  }
}
