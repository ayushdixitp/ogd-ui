import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnalyticaDataService {
  constructor(private httpClient: HttpClient) {}

  public publicFirePOSTAPI(
    methodName: any,
    serviceName: string,
    paramString?: any,
    serveFromCache?: any
  ): Observable<any> {
    const authConfig = {
      token: 'local',
    };
    var request: any = {
      type: 'api',
      service: serviceName,
      api: methodName,
      authConfig: authConfig,
      request_object: paramString,
    };
    if (serviceName === 'chatbot_configurations_api')
      request['request_type'] = 'GET';
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
    //let authHeaders = this.loginService.getAuthorizationHeaders();
    return this.httpClient.post(url, paramsObj, {}).pipe(
      map((res: any) => {
        //setting the data in cache store to use it further cases
        let data: any = res.data;
        data['requestObject'] = paramsObj.request_object;
        data['productRequestObject'] = paramsObj.request_object;
        return data;
      })
    );
  }
}
