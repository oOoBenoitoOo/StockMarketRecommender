import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SocialNetworkService } from './social-network.service';

describe('SocialNetworkService', () => {
  let service: SocialNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SocialNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
