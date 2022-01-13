import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { FilterGroup } from "src/app/shared/models/filter-group.interface";
import { setFacetedSearchAction } from "src/app/shared/store/faceted-search/faceted-search.actions";
import { selectActiveFacetedSearchFilterGroups, selectFacetedSearch } from "src/app/shared/store/faceted-search/faceted-search.selectors";
import { selectPosts, selectPublishedAtFilterOptions1, selectSourceFilterOptions, selectSourceFilterOptions1 } from "../store/post.selectors";
import { filteredPosts } from "./posts.operators";

@Injectable({
  providedIn:'root'
})
export class PostsFacade {

  constructor(private readonly store:Store){
  }

  posts$= this.store.pipe(select(selectPosts));

  SourceOptions$= this.store.select(selectSourceFilterOptions)



  facetedSearchFilterOptions$ = this.store.select(selectActiveFacetedSearchFilterGroups("posts-Feature") as any);

  filteredPosts$ = combineLatest([
    this.facetedSearchFilterOptions$,
    this.posts$
  ]).pipe(filteredPosts() as any)

  filterGroups$:Observable<FilterGroup[]> = combineLatest([
    this.store.select(selectSourceFilterOptions1),
    this.store.select(selectPublishedAtFilterOptions1)
  ]);

  setFacetedSearch(filterGroups: FilterGroup[]): void {
      this.store.dispatch(
        setFacetedSearchAction(
          {
            facetedSearch: {
              featureName:"posts-Feature",
              filterGroups:filterGroups
            }
          }
        )
      );

  }

}
