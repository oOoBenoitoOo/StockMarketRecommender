import { AlgorithmStore } from './../../stores/algorithm/algorithm.store';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SocialNetwork } from '../../models/social-network.model';
import { Algorithm } from '../../models/algorithm.model';
import { FormService } from '../../services/form/form.service';
import { SocialNetworkStore } from '../../stores/social-network/social-network.store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  recommenderForm: FormGroup;
  socialNetwork$: Observable<SocialNetwork[]>;
  algorithms$: Observable<Algorithm[]>;

  constructor(
    private formService: FormService,
    private socialNetworkStore: SocialNetworkStore,
    private algorithmStore: AlgorithmStore) { }

  ngOnInit(): void {
    this.recommenderForm = this.formService.initForm();
    this.socialNetwork$ = this.socialNetworkStore.socialNetwork$;
    this.algorithms$ = this.algorithmStore.alogrithms$;
  }

  get algorithm(): AbstractControl { return this.recommenderForm.get('algorithm'); }
  get symbol(): AbstractControl { return this.recommenderForm.get('symbol'); }
  get socialNetwork(): AbstractControl { return this.recommenderForm.get('socialNetwork'); }
  get startDate(): AbstractControl { return this.recommenderForm.get('startDate'); }
  get endDate(): AbstractControl { return this.recommenderForm.get('endDate'); }

  submitEvent(): void {
    this.recommenderForm.valid ? this.formService.submitEvent(this.recommenderForm) : this.triggerValidation();
  }

  private triggerValidation(): void {
    Object.keys(this.recommenderForm.controls).forEach(field => {
      const control = this.recommenderForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
