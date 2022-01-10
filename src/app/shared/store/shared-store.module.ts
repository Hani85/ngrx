import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPagination from './pagination/pagination.reducer';
import { paginationsFeatureKey } from './pagination/pagination.model';
import { EffectsModule } from '@ngrx/effects';
import { PaginationEffects } from './pagination/pagination.effects';
import { MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';
import * as fromFacetedSearch from './faceted-search/faceted-search.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(paginationsFeatureKey, fromPagination.paginationReducer),
    EffectsModule.forFeature([PaginationEffects]),
    StoreModule.forFeature(fromFacetedSearch.facetedSearchesFeatureKey, fromFacetedSearch.facetedSearchReducer)
  ],
  providers:[
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: {
        pageSize: 6,
        pageSizeOptions: [3,6,9,12],
      }
    }
  ]
})
export class SharedStoreModule { }
