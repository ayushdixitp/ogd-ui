import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  getskeleton(pageId: string | undefined): Observable<any> {
    if (pageId === 'career-site-bot') {
      return this.httpClient.get('https://api.npoint.io/d2511a5a4b7bcd4c16d1');
    }
    // return new Observable({data: 'hello'})
    else {
      return this.httpClient.get('https://api.npoint.io/d2511a5a4b7bcd4c16d1');
    }
  }

  getI18nValues() {
    return this.httpClient.get(
      'https://api.jsonbin.io/v3/b/62d6935b4d5b061b1b5861b5'
    );
  }
}
