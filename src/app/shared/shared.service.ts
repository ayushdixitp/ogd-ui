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
    const url = `v1/dashboard-schema${pageId}`;
    return this.httpService.httpGet(url, 'chatbot_management_api');
  }

  getI18nValues() {
    return this.httpClient.get('https://api.npoint.io/1aa706dbf5aeacdacdd4');
  }
}
