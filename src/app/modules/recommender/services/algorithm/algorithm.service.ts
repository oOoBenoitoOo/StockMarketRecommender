import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { environment } from 'src/environments/environment';
import { Algorithm } from '../../models/algorithm.model';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService extends HttpService<Algorithm, number> {

  constructor(protected http: HttpClient) {
    super(http, environment.api.algorithmApi);
  }

}
