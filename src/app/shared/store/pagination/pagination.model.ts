import { EntityState } from "@ngrx/entity";

export interface Pagination {
  componentName: string;
  pageIndex: number;
  pageSize: number;
}

export const paginationsFeatureKey = 'paginationFeauture';


export interface PaginationState extends EntityState<Pagination>{
  currentComponentName: string ;
}

export enum PaginationAction {
  Add = '[Pagination] Add',
  GoToFirstpage = '[Pagination] Go to first page',
  SetCurrentComponentName= '[Pagination] Set current component name',
  UnsetCurrentComponentName= '[Pagination] Unset current component name',
  Update = '[Pagination] Update',
}
