import { RecommendationKeys } from './../../enum/recommendation.enum';
import { Recommendation } from './../../models/recommendation.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form/form.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common/common.service';
import { GeneratorService } from '../../services/generator/generator.service';
import { tap } from 'rxjs/operators';
import { AlgorithmStore } from '../../stores/algorithm/algorithm.store';
import { Algorithm } from '../../models/algorithm.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  recommendations: Recommendation[] = [];
  formValue: FormGroup;
  algorithms$: Observable<Algorithm[]>;
  selectedAlgorithm: Algorithm;

  constructor(
    private formService: FormService,
    private router: Router,
    private commonService: CommonService,
    private generatorService: GeneratorService,
    private algorithmStore: AlgorithmStore) { }

  ngOnInit(): void {
    this.subscription = this.formService.recommenderFormValue.pipe(
      tap(value => this.formValue = value)
    ).subscribe(form => {
      if (form === null) { return this.router.navigate(['/']); }
      this.recommendations = this.getRecommendations(form);
      this.selectedAlgorithm = this.formValue.get('algorithm').value;
      this.algorithms$ = this.algorithmStore.alogrithms$;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get symbol(): string { return this.formValue ? this.formValue.get('symbol').value : ''; }
  get socialNetwork(): string { return this.formValue ? this.formValue.get('socialNetwork').value.name : ''; }
  get startDate(): string { return this.formValue ? this.formValue.get('startDate').value : ''; }
  get endDate(): string { return this.formValue ? this.formValue.get('endDate').value : ''; }
  get algorithm(): string { return this.formValue ? this.formValue.get('algorithm').value.name : ''; }
  get countPosts(): number { return this.recommendations ? this.recommendations.reduce((prev, cur) => prev + cur.countPosts, 0) : 0; }

  private getRecommendations(form: FormGroup): Recommendation[] {
    const result = [];
    const dates = this.commonService.getDates(form.get('startDate').value, form.get('endDate').value);
    const prices = this.generatorService.stockPriceGenerator(form.get('symbol').value, dates);
    prices.forEach(item => {
      result.push({
        date: item.date,
        price: item.price,
        countPosts: this.generatorService.socialMediaCountGenerator(form.get('symbol').value, form.get('socialNetwork').value),
        recommendation: RecommendationKeys[window.eval((form.get('algorithm').value).algorithmFn)]
      });
    });
    return result;
  }

  reloadCalculation(): void {
    this.formValue.get('algorithm').setValue(this.selectedAlgorithm);
    this.recommendations.forEach(item => {
        item.recommendation = RecommendationKeys[window.eval(this.selectedAlgorithm.algorithmFn)];
    });
  }

}
