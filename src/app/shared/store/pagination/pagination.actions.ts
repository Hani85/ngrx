import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Pagination, PaginationAction } from './pagination.model';

export const addPaginationAction = createAction(
  PaginationAction.Add,
  props<{ pagination: Pagination}>()
);


export const setCurrentComponentNameForPaginationAction = createAction(
  PaginationAction.SetCurrentComponentName,
  props<{ componentName: string}>()
);

export const goToFirstPage = createAction(
  PaginationAction.GoToFirstpage,
);

export const unsetCurrentComponentNameForPagination = createAction(
  PaginationAction.UnsetCurrentComponentName,
);

export const updatePaginationAction = createAction(
  PaginationAction.Update,
  props<{ pageIndex:number; pageSize: number}>()
);
