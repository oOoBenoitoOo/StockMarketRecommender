import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostSocialNetworkService } from './post-social-network.service';

describe('PostSocialNetworkService', () => {
  let service: PostSocialNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostSocialNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
