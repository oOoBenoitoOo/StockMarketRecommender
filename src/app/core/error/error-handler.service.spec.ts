import { TestBed } from '@angular/core/testing';

import { GenericErrorHandler } from './error-handler.service';

describe('GenericErrorHandler', () => {
  let service: GenericErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
