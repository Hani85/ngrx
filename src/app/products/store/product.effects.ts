import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of, tap, withLatestFrom } from 'rxjs';
import { ProductService } from '../services/poducts.service';
import * as fromProductActions from './product.actions'
import { ProductState } from './product.reducer';
import { selectedProduct, selectProducts } from './product.selectors';


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService:ProductService,
    private router: Router,
    private store:Store<ProductState>) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      mergeMap(action =>
         this.productService.getProducts()
          .pipe(
            map(products => (fromProductActions.loadProductsSuccess({products}))),
            catchError(error => of(fromProductActions.loadProductsFailure({error})))
          )
      )

    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProduct),
      mergeMap(action =>
        this.productService.getProduct(action.id)
          .pipe(
            map(product => (fromProductActions.loadProductSuccess({selectedProduct: product}))),
            catchError(error => of(fromProductActions.loadProductFailure({error})))
          )

      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap(action => this.productService.createProduct(action.product)
        .pipe(
          map(product => (fromProductActions.addProductSuccess({product: product}))),
          catchError(error => of(fromProductActions.addProductFailure({error})))
        )
      ),tap(()=> this.router.navigate(['/products']))
    )
  );

  updateProduct$ = createEffect(() =>
          this.actions$.pipe(
            ofType(fromProductActions.updateProduct),
            concatMap(action =>
              this.productService.editProduct(
              action.product.id,
              action.product.changes
              )
            ),
            tap(()=> this.router.navigate(['/products']))
          ),
          {dispatch: false}
  );

  deleteProduct$ = createEffect(()=>
  this.actions$.pipe(
    ofType(fromProductActions.deleteProduct),
    mergeMap(action => this.productService.deleteProduct(action.id).pipe(
      map(()=> fromProductActions.deleteProductSuccess({id: action.id})),
      catchError(error => of(fromProductActions.deleteProductFailure({error: error})))
    )
    ),
    tap(() => this.router.navigate(['/products']))
  )

  );

}
