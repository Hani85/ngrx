import { Dictionary, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import {
  filter as _filter,
  isEmpty as _isEmpty,
  map as _map,
  isUndefined as _isUndefined
} from 'lodash'
import { FilterGroup } from "../../models/filter-group.interface";
import { FacetedSearch, facetedSearchKey } from './faceted-search.model';
import { selectEntities } from './faceted-search.reducer';

const getActiveFacetedSearchFilterGroups = (
  filterGroups: FilterGroup[],
): FilterGroup[] => {
  const filterGroupsWithActiveFilters: FilterGroup[] = _filter(
    filterGroups,
    ({ options }) => !_isEmpty(_filter(options, ({ isSet }) => isSet)),
  );

    return filterGroupsWithActiveFilters;


};

const selectFacetedSearchFeature = createFeatureSelector<
  EntityState<FacetedSearch>
>(facetedSearchKey);

export const selectFacetedSearchEntities = createSelector(
  selectFacetedSearchFeature,
  selectEntities,
);

export const selectFacetedSearch: (
  featureName: string,
) => MemoizedSelector<EntityState<FacetedSearch>, FacetedSearch | undefined> = (
  featureName: string,
) =>
  createSelector(
    selectFacetedSearchEntities,
    (facetedSearchEntities: Dictionary<FacetedSearch>) =>
      facetedSearchEntities[featureName],
  );

export const selectFacetedSearchFilterGroups: (
  featureName: string,
) => MemoizedSelector<EntityState<FacetedSearch>, FilterGroup[] | undefined> = (
  featureName: string,
) =>
  createSelector(
    selectFacetedSearch(featureName),
    (facetedSearch: FacetedSearch | undefined) => facetedSearch?.filterGroups,
  );

export const selectActiveFacetedSearchFilterGroups: (
  featureName: string,
) => MemoizedSelector<EntityState<FacetedSearch>, FilterGroup[] | undefined> = (
  featureName: string,
) =>
  createSelector(
    selectFacetedSearchFilterGroups(featureName),
    (filterGroups: FilterGroup[] | undefined) =>
      _isUndefined(filterGroups)
        ? undefined
        : getActiveFacetedSearchFilterGroups(filterGroups),
  );

