import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FakeSevice extends HttpService<any, any>{

  constructor(protected http: HttpClient) {
    super(http, environment.base);
  }
}
