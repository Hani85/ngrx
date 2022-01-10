import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { addPaginationAction, setCurrentComponentNameForPaginationAction } from './pagination.actions';
import { selectPagination } from './pagination.selectors';
import {isEmpty as _isEmpty } from 'lodash';


@Injectable()
export class PaginationEffects {



  constructor(private readonly actions$: Actions,
    private readonly store: Store<AppState>) {}

    onsetCurrentComponent$= createEffect(()=>
      this.actions$.pipe(
        ofType(setCurrentComponentNameForPaginationAction),
        concatLatestFrom(()=> this.store.select(selectPagination)),
        filter(([,pagination])=> _isEmpty(pagination)),
        map(([{componentName}])=>
        addPaginationAction({
          pagination: {
            componentName,
            pageIndex: 0,
            pageSize: 6,
          },
        }),
        ),
      ),
    );

}
