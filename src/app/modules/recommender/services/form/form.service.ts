import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private now = new Date();
  private defaultEndDate = this.now.toISOString().split('T')[0];
  private defaultStartDate = new Date(this.now.setDate((this.now.getDate() - 9))).toISOString().split('T')[0];

  private recommenderForm = new BehaviorSubject<FormGroup>(null);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  get recommenderFormValue(): Observable<FormGroup> { return this.recommenderForm.asObservable(); }

  initForm(): FormGroup{
    return this.formBuilder.group({
      symbol: ['', Validators.required],
      socialNetwork: ['', Validators.required],
      startDate: [this.defaultStartDate, Validators.required],
      endDate: [this.defaultEndDate, Validators.required],
      algorithm: ['', Validators.required]
    });
  }

  submitEvent(form: FormGroup): void{
    this.recommenderForm.next(form);
    this.router.navigate(['result']);
  }
}
