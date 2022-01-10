import { Injectable } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { setCurrentComponentNameForPaginationAction, updatePaginationAction } from "src/app/shared/store/pagination/pagination.actions";
import { getItemsForCurrentPage } from "src/app/shared/store/pagination/pagination.operators";
import { selectPagination } from "src/app/shared/store/pagination/pagination.selectors";
import { AppState } from "src/app/store/app.state";
import { selectedProduct, selectProducts } from "../store/product.selectors";

@Injectable({
  providedIn:'root'
})
export class ProductFacade {

  constructor(private readonly store: Store<AppState>){}

  products$ = this.store.select(selectProducts);

  selectedProduct$ = this.store.select(selectedProduct);

  pagination$ = this.store.select(selectPagination)

  paginatedProducts$ = this.pagination$.pipe(
    getItemsForCurrentPage(this.products$),
  );


  setPaginationComponent(componentName: string): void {
    this.store.dispatch(
      setCurrentComponentNameForPaginationAction({
        componentName
      }),
    );
  }

  updatePagination({pageIndex, pageSize}: PageEvent):void {
    this.store.dispatch(updatePaginationAction({pageIndex,pageSize}))
  }
}
