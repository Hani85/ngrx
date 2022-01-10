import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { PostService } from '../services/post.service';
import * as fromPostAction from './post.actions'
import { PostState } from './post.reducer';
import { selectPosts } from './post.selectors';



@Injectable()
export class PostEffects {
  constructor(private actions$: Actions,
    private postService: PostService,
    private store: Store<PostState>) {}

  loadPosts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromPostAction.loadPosts),
    mergeMap(action =>

      this.postService.getPosts()
        .pipe(
          map(posts => (fromPostAction.loadPostsSuccess({posts}))),
          catchError(error => of(fromPostAction.loadPostsFailure({error})))
        )
    )
  )
);


loadPost$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromPostAction.loadPost),
    mergeMap(action => {

      return this.postService.getPost(action.id)
      .pipe(
        map(post => (fromPostAction.loadPostSuccess({selectedPost: post}))),
        catchError(error => of(fromPostAction.loadPostsFailure({error})))
      )


    }
    )
  )
);

}
