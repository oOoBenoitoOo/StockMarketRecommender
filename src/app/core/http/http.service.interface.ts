import { Observable } from 'rxjs';

export interface IHttpService<T, ID> {
  post(t: T): Observable<T>;
  put(id: ID, t: T): Observable<T>;
  get(id: ID): Observable<T>;
  getAll(): Observable<T[]>;
  delete(id: ID): Observable<any>;
}
