import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import socialNetworks from '../mock/social-network.json';
import algorithms from '../mock/algorithm.json';
import postSocialNetwork from '../mock/post-social-network.json';

const mocks = [
    {
        url: environment.api.socialNetworkApi,
        json: socialNetworks
    },
    {
        url: environment.api.algorithmApi,
        json: algorithms
    },
    {
        url: environment.api.postSocialNetworkApi,
        json: postSocialNetwork
    }
];

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const item of mocks) {
            if (request.url === item.url) {
                return of(new HttpResponse({ status: 200, body: ((item.json) as any) }));
            }
        }
        return next.handle(request);
    }
}
