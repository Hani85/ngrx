import { Action, createReducer, on } from '@ngrx/store';
import { PaginationState } from './pagination.model';
import * as PaginationActions from './pagination.actions';
import { paginationAdapter } from './pagination.adapter';



export const initialPaginationState: PaginationState = paginationAdapter.getInitialState({
  currentComponentName: undefined!,
});

 export const paginationReducer = createReducer(
  initialPaginationState,
  on(PaginationActions.addPaginationAction,
    (state, { pagination }) => paginationAdapter.addOne(pagination, state)
  ),

  on(PaginationActions.goToFirstPage,(state)=>
    paginationAdapter.updateOne(
      {
        id: state.currentComponentName ,
        changes:{
          pageIndex: 0,
        },
      },
      state
    ),
  ),

  on(PaginationActions.setCurrentComponentNameForPaginationAction,
    (state, { componentName }): PaginationState => ({
      ...state,
      currentComponentName:componentName
    }),
  ),

  on(PaginationActions.unsetCurrentComponentNameForPagination,
    (state): PaginationState => ({
      ...state,
      currentComponentName:undefined!,
    }),
  ),

  on(PaginationActions.updatePaginationAction,(state, { pageIndex, pageSize })=>
    paginationAdapter.updateOne(
      {
        id: state.currentComponentName ,
        changes:{
          pageIndex,
          pageSize,
        },
      },
      state
    ),
  ),

);

