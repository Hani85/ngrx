import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../models/product';
//load Products
export const loadProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product List Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List Effect] Load Products Failure',
  props<{ error: any }>()
);

export const setselectedProduct = createAction(
  '[Product Card Component] setselected Product',
  props<{ selectedProduct: Product }>()
);
//load Product
export const loadProduct = createAction(
  '[Product Detail Component] Load Product',
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  '[Product Detail Effect] Load Product Success',
  props<{ selectedProduct: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Detail Effect] Load Product Failure',
  props<{ error: any }>()
);
//add product
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failure',
  props<{ error: any }>()
);

export const updateProduct = createAction(
  '[Product Edit Component] Update Product',
  props<{ product: Update<Product> }>()
);

export const deleteProduct = createAction(
  '[Product List Component] Delete Product',
  props<{ id: string}>()
);

export const deleteProductSuccess = createAction(
  '[Product Effect] Delete Product Success',
  props<{ id: string }>()
);

export const deleteProductFailure = createAction(
  '[Product Effect] Delete Product Failure',
  props<{ error: any }>()
);

export const dummyAction= createAction('[dummy action]');

