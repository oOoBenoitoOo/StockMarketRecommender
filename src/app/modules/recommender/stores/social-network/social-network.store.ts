import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SocialNetwork } from '../../models/social-network.model';
import { SocialNetworkService } from '../../services/social-network/social-network.service';

@Injectable({
    providedIn: 'root'
})
export class SocialNetworkStore {

    private subject = new BehaviorSubject<SocialNetwork[]>([]);

    socialNetwork$: Observable<SocialNetwork[]> = this.subject.asObservable();

    constructor(private socialNetworkService: SocialNetworkService) {
        this.loadAll();
    }

    loadAll(): void {
        this.socialNetworkService.getAll().pipe(
            tap(data => this.subject.next(data))
        ).subscribe();
    }

}
