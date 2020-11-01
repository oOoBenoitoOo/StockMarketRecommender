import { FormService } from './services/form/form.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { PageComponent } from './components/page/page.component';
import { RecommenderRoutingModule } from './recommender-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialNetworkService } from './services/social-network/social-network.service';
import { AlgorithmService } from './services/algorithm/algorithm.service';
import { HttpMockInterceptor } from 'src/app/core/interceptors/http-mock.interceptor';
import { PostsComponent } from './components/posts/posts.component';
import { PostSocialNetworkService } from './services/post-social-network/post-social-network.service';
import { AlgorithmStore } from './stores/algorithm/algorithm.store';
import { SocialNetworkStore } from './stores/social-network/social-network.store';

@NgModule({
  declarations: [FormComponent, ResultComponent, PageComponent, PostsComponent],
  imports: [
    CommonModule,
    RecommenderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormService,
    SocialNetworkService,
    AlgorithmService,
    PostSocialNetworkService,
    AlgorithmStore,
    SocialNetworkStore,
    { provide: HTTP_INTERCEPTORS, useClass: HttpMockInterceptor, multi: true }
  ]
})
export class RecommenderModule { }
