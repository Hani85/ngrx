import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../models/product';
import * as ProductActions from './product.actions';
import { selectedProduct } from './product.selectors';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  // additional entities state properties
  selectedProduct:Product
  error: any,
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  selectedProduct: undefined!,
  error: undefined,

});

export const ProductReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess,
    (state, action) => adapter.setAll(action.products, state)
  ),
  on(ProductActions.loadProductsFailure,
    (state, action) => {
      return {
        ...state,
        error:action.error
      };
    }
  ),

  on(ProductActions.setselectedProduct,
    (state, action) => {
      return{
        ...state,
        selectedProduct: action.selectedProduct
      }
    }
  ),

  on(ProductActions.loadProductSuccess,
    (state, action) => {
      return{
        ...state,
        selectedProduct: action.selectedProduct
      }
    }
  ),
  on(ProductActions.loadProductFailure,
    (state, action) => {
      return {
        ...state,
        error:action.error
      };
    }
  ),

  on(ProductActions.addProductSuccess,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductFailure,
    (state, action) => {
      return {
        ...state,
        error:action.error
      };
    }
  ),
  on(ProductActions.updateProduct,
    (state, action) => adapter.updateOne(action.product, state)
  ),
  on(ProductActions.deleteProductSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProductActions.deleteProductFailure,
    (state,action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
