import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { HttpType } from 'src/app/shared/enums/http.enum';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/shared/interfaces/http.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public httpPost(
    methodName: string,
    serviceName: string,
    requestObject?: any
  ): Observable<any> {
    const authConfig = {
      token: 'local',
    };
    var request: any = {
      type: 'api',
      service: serviceName,
      api: methodName,
      authConfig: authConfig,
      request_object: requestObject,
    };
    request['request_type'] = HttpType.HTTP_POST;
    return this.httpClient.post(methodName, serviceName);
  }

  public httpPatch(
    methodName: string,
    serviceName: string,
    requestObject?: any
  ): Observable<Response> {
    const authConfig = {
      token: 'local',
    };
    var request: any = {
      type: 'api',
      service: serviceName,
      api: methodName,
      authConfig: authConfig,
      request_object: requestObject,
    };
    request['request_type'] = HttpType.HTTP_PATCH;
    return this.cmpHubPostAPI(environment.testingRestApi, request);
  }

  public httpGet(
    methodName: string,
    serviceName: string,
    requestObject?: any
  ): Observable<Response> {
    const authConfig = {
      token: 'local',
    };
    var request: any = {
      type: 'api',
      service: serviceName,
      api: methodName,
      authConfig: authConfig,
      request_object: requestObject,
    };
    request['request_type'] = HttpType.HTTP_GET;
    return this.cmpHubPostAPI(environment.testingRestApi, request);
  }

  public httpDelete(
    methodName: string,
    serviceName: string,
    requestObject?: any
  ): Observable<Response> {
    const authConfig = {
      token: 'local',
    };
    var request: any = {
      type: 'api',
      service: serviceName,
      api: methodName,
      authConfig: authConfig,
      request_object: requestObject,
    };
    request['request_type'] = HttpType.HTTP_DELETE;
    return this.cmpHubPostAPI(environment.testingRestApi, request);
  }

  public cmpHubPostAPI(methodName: any, params?: any): Observable<Response> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    let paramsObj: any = params ? params : {};
    let url = methodName;
    paramsObj['token'] = 'local';
    return this.httpClient.post<Response>(url, paramsObj).pipe(
      map((res: Response) => {
        if (res.data) {
          let data: any = res.data ? res.data : {};
          data['requestObject'] = paramsObj?.request_object;
          data['productRequestObject'] = paramsObj?.request_object;
          return data;
        } else if (res.error) {
          return res.error;
        }
      })
    );
  }
}
