import { createFeatureSelector, createSelector } from "@ngrx/store";
import { paginationAdapter } from "./pagination.adapter";
import { paginationsFeatureKey, PaginationState } from "./pagination.model";
import { get as _get } from 'lodash';
const { selectEntities } = paginationAdapter.getSelectors()

const selectPaginationState =  createFeatureSelector<PaginationState>(paginationsFeatureKey);

export const selectCurrentComponentName = createSelector(
  selectPaginationState,
  (state)=> state.currentComponentName,
);

export const selectPaginationEntities = createSelector(
  selectPaginationState,
  selectEntities,
);

export const selectPagination= createSelector(
  selectPaginationEntities,
  selectCurrentComponentName,
  (paginationEntities,currentComponentName) =>
  _get(paginationEntities, currentComponentName)
);
