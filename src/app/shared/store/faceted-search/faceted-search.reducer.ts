import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FacetedSearch } from './faceted-search.model';
import * as FacetedSearchActions from './faceted-search.actions';
import { facetedSearchAdapter } from './faceted-search.adapter';

export const facetedSearchesFeatureKey = 'facetedSearches';

export interface State extends EntityState<FacetedSearch> {
  // additional entities state properties
}



export const initialState: State = facetedSearchAdapter.getInitialState({
  // additional entity state properties
});

export const facetedSearchReducer = createReducer(
  initialState,
  on(FacetedSearchActions.setFacetedSearchAction,
    (state, {facetedSearch}) => facetedSearchAdapter.upsertOne(facetedSearch, state)
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = facetedSearchAdapter.getSelectors();
