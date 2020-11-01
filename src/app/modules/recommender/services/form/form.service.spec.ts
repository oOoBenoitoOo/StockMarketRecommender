import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule]
    });
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('recommender form should initiate each properties', () => {
    let recommenderForm: FormGroup;
    recommenderForm = service.initForm();
    expect(recommenderForm.get('symbol')).toBeDefined();
    expect(recommenderForm.get('socialNetwork')).toBeDefined();
    expect(recommenderForm.get('startDate')).toBeDefined();
    expect(recommenderForm.get('endDate')).toBeDefined();
    expect(recommenderForm.get('algorithm')).toBeDefined();
  });

  it('algorithm property should have default value', () => {
    let recommenderForm: FormGroup;
    recommenderForm = service.initForm();
    expect(recommenderForm.get('algorithm').value).not.toBeNull();
  });
});
