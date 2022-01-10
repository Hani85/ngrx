import { map, Observable, OperatorFunction, switchMap } from "rxjs";
import { Pagination } from "./pagination.model";
import { isEqual as _isEqual, slice as _slice } from "lodash/fp";

export const getItemsForCurrentPage = <T>(
  allItems$: Observable<T[]>,
): OperatorFunction<Pagination | any, T[]> =>
switchMap(({ pageIndex, pageSize }) =>
  allItems$.pipe(
    // map(_slice(pageIndex * pageSize, (pageIndex + 1) +pageSize)),
    map(_slice(pageIndex * pageSize,  (pageIndex * pageSize) +pageSize)),
),
);
