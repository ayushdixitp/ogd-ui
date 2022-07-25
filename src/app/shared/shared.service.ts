import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  getskeleton(): Observable<any> {
    return this.httpClient.get('https://api.npoint.io/d2511a5a4b7bcd4c16d1');
  }

  getI18nValues() {
    return this.httpClient.get(
      'https://api.jsonbin.io/v3/b/62d6935b4d5b061b1b5861b5'
    );
  }

  public publicFirePOSTAPI(
    methodName: any,
    serviceName: string,
    requestType?: string,
    paramString?: any,
    serveFromCache?: any
  ): Observable<any> {
    const authConfig = {
      token: 'local',
    };
    authConfig['token'] = 'local';
    var request: any = {
      type: 'api',
      service: serviceName,
      api: methodName,
      authConfig: authConfig,
      request_object: paramString,
    };
    if (serviceName == 'chatbot_configurations_api')
      request['request_type'] = requestType;
    return this.fireAnalyticsPOSTAPI(
      environment.authenticationProxy,
      request,
      serveFromCache
    );
  }

  public fireAnalyticsPOSTAPI(
    methodName: any,
    params?: any,
    serveFromCache?: any
  ): Observable<any> {
    let paramsObj = params ? params : {};
    paramsObj['token'] = 'local';
    let url = methodName;
    if (serveFromCache === undefined) {
      serveFromCache = true;
    }
    return this.httpClient.post(url, paramsObj, {}).pipe(
      map((res: any) => {
        let data: any = res.data;
        data['requestObject'] = paramsObj.request_object;
        data['productRequestObject'] = paramsObj.request_object;
        return data;
      })
    );
  }
}
