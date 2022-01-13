import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, postsFeatureKey, PostState, selectAll } from "./post.reducer";
import { getPublishedAt, getPublishedAt1, getPublishedAt2, getSources, getSources1} from "./posts.mappers";

export  const selectPostState = createFeatureSelector<PostState>(
  postsFeatureKey
);



export const selectPosts = createSelector(selectPostState,selectAll);
export const selectedPost = createSelector(selectPostState,
  (state:PostState) => state.selectedPost
);

export const selectSourceFilterOptions = createSelector(
  selectPosts,
  getSources()
);

export const selectPublishedAtFilterOptions = createSelector(
  selectPosts,
  getPublishedAt()
);

export const selectSourceFilterOptions1 = createSelector(
  selectPosts,
  getSources1()
);

export const selectPublishedAtFilterOptions1 = createSelector(
  selectPosts,
  getPublishedAt2()
);


