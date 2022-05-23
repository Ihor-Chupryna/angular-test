import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comment-components/comments/comments.component";
import {CommentResolver, CommentsResolver} from "./comment-services";
import {CommentDetailsComponent} from "./comment-components/comment-details/comment-details.component";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, resolve: {comments: CommentsResolver}, children: [
      {path: ':id', resolve:{comment: CommentResolver}, component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
