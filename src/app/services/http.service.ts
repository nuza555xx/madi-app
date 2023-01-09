import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private params = new HttpParams();
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers = this.headers.append(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    this.headers = this.headers.append('Authorization', '');
    this.params = this.params.append('', '');
  }
  getAsset(directory: string): Observable<any> {
    return this.http.get(directory, {
      ...this.headers,
      ...this.params,
    });
  }
}
