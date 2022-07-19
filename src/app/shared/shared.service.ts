import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  getskeleton(): Observable<any> {
    return this.httpClient.get('https://api.npoint.io/d2511a5a4b7bcd4c16d1');
  }
}
