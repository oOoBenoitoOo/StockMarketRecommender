import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlgorithmService } from '../../services/algorithm/algorithm.service';
import { Algorithm } from '../../models/algorithm.model';

@Injectable({
    providedIn: 'root'
})
export class AlgorithmStore {

    private subject = new BehaviorSubject<Algorithm[]>([]);

    alogrithms$: Observable<Algorithm[]> = this.subject.asObservable();

    constructor(private algorithmService: AlgorithmService) {
        this.loadAll();
    }

    loadAll(): void {
        this.algorithmService.getAll().pipe(
            tap(data => this.subject.next(data))
        ).subscribe();
    }

}
