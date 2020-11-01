import { SocialNetwork } from './../../models/social-network.model';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { PostSocialNetwork } from '../../models/post-social-network.model';
import { PostSocialNetworkService } from '../../services/post-social-network/post-social-network.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() socialNetwork: string;

  posts$: Observable<PostSocialNetwork[]>;
  numberOfDisplayPosts = 2;
  numberLabel = 'more...';

  constructor(private postSocialNetworkService: PostSocialNetworkService) { }

  ngOnInit(): void {
    this.posts$ = this.postSocialNetworkService.getAll();
  }

  more(): void{
    this.numberOfDisplayPosts = this.numberOfDisplayPosts === 2 ? 10 : 2;
    this.numberLabel = this.numberLabel === 'more...' ? 'less...' : 'more...';
  }

}
