import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  constructor(private http: HttpService) {}
  getProvinces(directory: string): Observable<any> {
    return this.http.getAsset(directory);
  }
  getDistricts(directory: string): Observable<any> {
    return this.http.getAsset(directory);
  }
}
