import { postsReducer, PostState } from "../posts/store/post.reducer";
import { ProductReducer, ProductState } from "../products/store/product.reducer";
import { PaginationState } from "../shared/store/pagination/pagination.model";
import { paginationReducer } from "../shared/store/pagination/pagination.reducer";

export interface AppState {
  products: ProductState,
  posts: PostState,
}

export const appReducer =  {
  products: ProductReducer,
  posts: postsReducer,


}
