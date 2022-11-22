import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
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
    const url = `${environment.dashboardSchema}${pageId}.json?v=${Date.now()}`;
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
    console.log(localStorage.getItem('LOCALE')?.split('_')[0]);
    let locale = localStorage.getItem('LOCALE')?.split('_')[0];
    return this.httpClient.get(
      `https://cdn-bot.phenompeople.com/translations/cmp-translations-${locale}.json?v=${Date.now()}`
    );
  }
}
