import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./post-components/posts/posts.component";
import {PostResolver, PostsResolver} from "./post-service";
import {PostDetailsComponent} from "./post-components/post-details/post-details.component";

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {posts: PostsResolver}, children: [
      {path: ':id', component: PostDetailsComponent, resolve: {post: PostResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
