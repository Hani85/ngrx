import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Pagination } from "./pagination.model";

export const paginationAdapter: EntityAdapter<Pagination> = createEntityAdapter<Pagination>(
  {
    selectId: (paginationState)=> paginationState.componentName,
  }
);
