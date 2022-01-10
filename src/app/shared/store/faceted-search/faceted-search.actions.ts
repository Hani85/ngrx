import { createAction, props } from '@ngrx/store';

import { FacetedSearch, FacetedSearchAction } from './faceted-search.model';

export const setFacetedSearchAction = createAction(
  FacetedSearchAction.Set,
  props<{ facetedSearch: FacetedSearch }>(),
);

