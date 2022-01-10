import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { selectFacetedSearchFilterGroups } from "src/app/shared/store/faceted-search/faceted-search.selectors";
import { selectPosts, selectSourceFilterOptions } from "../store/post.selectors";

@Injectable({
  providedIn:'root'
})
export class PostsFacade {

  constructor(private readonly store:Store){}

  posts$= this.store.pipe(select(selectPosts));

  SourceOptions$= this.store.select(selectSourceFilterOptions)

}
