import { FilterGroup } from "../../models/filter-group.interface";

export const facetedSearchKey = 'facetedSearchFeature';

export interface FacetedSearch {
  featureName: string;
  filterGroups:FilterGroup[];
}

export enum FacetedSearchAction {
  Set = '[Faceted Search] Set',
}
