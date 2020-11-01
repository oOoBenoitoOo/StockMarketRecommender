import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be show the loader', () => {
    service.show();
    expect(service.showLoader).toBeTrue();
  });

  it('should be hide the loader', () => {
    service.hide();
    expect(service.showLoader).toBeFalse();
  });
});
