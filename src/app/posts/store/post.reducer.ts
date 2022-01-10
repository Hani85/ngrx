import { createReducer, on } from "@ngrx/store";
import { Post } from "./post.model";
import * as PostActions from './post.actions'
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const postsFeatureKey = 'posts';
export interface PostState extends EntityState<Post> {
  // additional entities state properties
  selectedPost:Post
  error: any,


}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostState = adapter.getInitialState({
  selectedPost: undefined!,
  error: undefined,

});
export const postsReducer = createReducer(initialState,
 on(PostActions.loadPostsSuccess,
  (state,action) => adapter.setAll(action.posts, state)
 ),
 on(PostActions.loadPostsFailure,
  (state,action) => {
    return {
      ...state,
      error:action.error
    }
  }
 ),
 on(PostActions.loadPostSuccess,
  (state,action) => {
    return {
      ...state,
      selectedPost: action.selectedPost
    }
  }
 ),
 on(PostActions.loadPostFailure,
  (state,action) => {
    return {
      ...state,
      error:action.error
    }
  }
 ),
 on(PostActions.setselectedPost,
  (state, action) => {
    return{
      ...state,
      selectedPost: action.selectedPost
    }
  }
),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();


