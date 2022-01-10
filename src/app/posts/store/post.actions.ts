import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Post } from './post.model';

//loadPosts
export const loadPosts = createAction(
  '[Post List Component] Load Posts',
);

export const loadPostsSuccess = createAction(
  '[Post Effect] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post Effect] Load Posts Failure',
  props<{ error: string }>()
);

//loadPost
export const loadPost = createAction(
  '[Post Detail] Load Post',
  props<{ id: string }>()
);

export const loadPostSuccess = createAction(
  '[Post Effect] Load Post Success',
  props<{ selectedPost: Post}>()
);

export const loadPostFailure = createAction(
  '[Post Effect] Load Post Failure',
  props<{ error: string }>()
);

export const setselectedPost = createAction(
  '[Post Card Component] setselected Post',
  props<{ selectedPost: Post }>()
);

export const addPost = createAction(
  '[Post/API] Add Post',
  props<{ post: Post }>()
);

export const upsertPost = createAction(
  '[Post/API] Upsert Post',
  props<{ post: Post }>()
);

export const addPosts = createAction(
  '[Post/API] Add Posts',
  props<{ posts: Post[] }>()
);

export const upsertPosts = createAction(
  '[Post/API] Upsert Posts',
  props<{ posts: Post[] }>()
);

export const updatePost = createAction(
  '[Post/API] Update Post',
  props<{ post: Update<Post> }>()
);

export const updatePosts = createAction(
  '[Post/API] Update Posts',
  props<{ posts: Update<Post>[] }>()
);

export const deletePost = createAction(
  '[Post/API] Delete Post',
  props<{ id: string }>()
);

export const deletePosts = createAction(
  '[Post/API] Delete Posts',
  props<{ ids: string[] }>()
);

export const clearPosts = createAction(
  '[Post/API] Clear Posts'
);

export const dummyAction= createAction('[dummy action]');
