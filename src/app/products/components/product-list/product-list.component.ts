import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { ProductFacade } from '../../application/product.facade';
import { Product } from '../../models/product';
import { loadProducts } from '../../store/product.actions';
import { ProductState, selectIds } from '../../store/product.reducer';
import { selectProducts } from '../../store/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  // productslength!: number;
  // products!: Product[];
  // pageSlice!: Product[];
  constructor(readonly productFacade: ProductFacade, private store: Store<AppState>) { }


  ngOnInit(): void {

     this.store.pipe(select(selectProducts)).subscribe((products)=> {
      if(products.length === 0){
        this.store.dispatch(loadProducts());
      }
      this.productFacade.setPaginationComponent(this.constructor.name);
    }
    )

  }



  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete
  }

}
