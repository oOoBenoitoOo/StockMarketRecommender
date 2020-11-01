import { TestBed } from '@angular/core/testing';
import { CommonService } from 'src/app/core/services/common/common.service';

import { GeneratorService } from './generator.service';

describe('GeneratorService', () => {
  let service: GeneratorService;
  let commonService: CommonService;
  let generatedPrice = [];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorService);
    commonService = TestBed.inject(CommonService);
    generatedPrice = service.stockPriceGenerator('APPL', commonService.getDates('2020-11-01', '2020-10-23'));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  generatedPrice.forEach(price => {
    it('should generate price for a date', () => {
      expect(price.price).toBePositiveInfinity();
      expect(price.price).not.toBeNaN();
    });
  });

  it('should generate price for a date', () => {
    const result = service.stockPriceGenerator('APPL', commonService.getDates('2020-11-01', '2020-10-23'));
    expect(result).not.toBeNull();
  });

  it('should generate a count for a symbol and a social', () => {
    const result = service.socialMediaCountGenerator('VUN', { id: 1, name: 'LinkedIn' });
    expect(result).not.toBeNaN();
  });
});
