import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IHttpService } from './http.service.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T, ID> implements IHttpService<T, ID> {

  constructor(
    protected http: HttpClient,
    protected base: string
  ) {}

  post(t: T): Observable<T> {
    return this.http.post<T>(this.base, t);
  }

  put(id: ID, t: T): Observable<T> {
    return this.http.put<T>(this.base + '/' + id, t, {});
  }

  get(id: ID): Observable<T> {
    return this.http.get<T>(this.base + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.base);
  }

  delete(id: ID): Observable<T> {
    return this.http.delete<T>(this.base + '/' + id);
  }
}
