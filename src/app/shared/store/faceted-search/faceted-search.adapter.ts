import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { FacetedSearch } from "./faceted-search.model";

export const facetedSearchAdapter: EntityAdapter<FacetedSearch> = createEntityAdapter<FacetedSearch>(
  {
    selectId: (facetedSearch) => facetedSearch.featureName,
  }
);
