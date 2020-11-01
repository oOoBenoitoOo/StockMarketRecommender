import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { environment } from 'src/environments/environment';
import { PostSocialNetwork } from '../../models/post-social-network.model';

@Injectable({
  providedIn: 'root'
})
export class PostSocialNetworkService extends HttpService<PostSocialNetwork, number> {

  constructor(protected http: HttpClient) {
    super(http, environment.api.postSocialNetworkApi);
  }
}
