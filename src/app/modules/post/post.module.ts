import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './post-components/posts/posts.component';
import { PostComponent } from './post-components/post/post.component';
import { PostDetailsComponent } from './post-components/post-details/post-details.component';
import {PostResolver, PostService, PostsResolver} from "./post-service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, PostsResolver, PostResolver]
})
export class PostModule { }
