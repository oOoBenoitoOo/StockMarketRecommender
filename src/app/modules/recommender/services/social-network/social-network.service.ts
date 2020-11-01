import { SocialNetwork } from './../../models/social-network.model';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService extends HttpService<SocialNetwork, number> {

  constructor(protected http: HttpClient) {
    super(http, environment.api.socialNetworkApi);
  }

}
