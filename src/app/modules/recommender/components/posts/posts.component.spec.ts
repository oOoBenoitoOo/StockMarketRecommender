import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostSocialNetworkService } from '../../services/post-social-network/post-social-network.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [HttpClientTestingModule],
      providers: [PostSocialNetworkService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct display values', () => {
    expect(component.numberLabel).toEqual('more...');
    expect(component.numberOfDisplayPosts).toEqual(2);
    component.more();
    expect(component.numberLabel).toEqual('less...');
    expect(component.numberOfDisplayPosts).toEqual(10);
  });

});
