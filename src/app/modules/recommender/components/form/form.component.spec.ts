import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlgorithmService } from '../../services/algorithm/algorithm.service';
import { FormService } from '../../services/form/form.service';
import { SocialNetworkService } from '../../services/social-network/social-network.service';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule],
      providers: [FormService, SocialNetworkService, AlgorithmService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Getters should return a value', () => {
    component.recommenderForm.get('algorithm').setValue({});
    component.recommenderForm.get('symbol').setValue('VOO');
    component.recommenderForm.get('socialNetwork').setValue({});
    component.recommenderForm.get('startDate').setValue('2020-11-01');
    component.recommenderForm.get('endDate').setValue('2020-11-21');

    expect(component.algorithm).not.toBeNull();
    expect(component.symbol).not.toBeNull();
    expect(component.socialNetwork).not.toBeNull();
    expect(component.startDate).not.toBeNull();
    expect(component.endDate).not.toBeNull();
  });

});
