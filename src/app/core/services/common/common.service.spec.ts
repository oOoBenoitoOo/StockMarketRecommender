import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the correct timezone', () => {
    const date = service.setTimeZone('2020-11-01');
    expect(date).not.toBeNull();
    expect(date.getTimezoneOffset()).toEqual(new Date().getTimezoneOffset());
  });

  it('should get the correct count of dates in the array', () => {
    const dates = service.getDates('2020-10-25', '2020-11-01');
    expect(dates).not.toBeNull();
    expect(dates.length).toEqual(8);
  });


});
