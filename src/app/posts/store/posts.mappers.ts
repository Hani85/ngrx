// import { flow as _flow, map as _map, uniq as _uniq } from "lodash";
import { flow as _flow, map as _map, uniq as _uniq , sortBy as _sortBy, orderBy as _orderBy, concat as _concat , compose as _compose} from "lodash/fp";
import {map as _nmap} from 'lodash'
import { FilterGroupOption } from "src/app/shared/models/filter-group-option.interface";
import { FilterGroup } from "src/app/shared/models/filter-group.interface";
import { Post } from "./post.model";



export const getSources =
() =>
_flow(
  _map("source"),
  _uniq
)


export const getPublishedAt =
() =>
_flow(
  _map(({publishedAt})=> new Date(publishedAt).getFullYear().toString()),
  _uniq,
)



export const getSources1 =
() => (posts: Post[]): FilterGroup => ({
  name: "Sources",
  options: toSourceOptions()(posts)
}
);
export const toSourceOptions =
() =>
_flow(
  _map(({source})=> ({value:source,isSet:false})),
  _uniq
)
;



export const getPublishedAt1 =
() => (posts: Post[]): FilterGroup => ({
  name: "Datum",
  options: toDatesOptions()(posts)

});


export const getPublishedAt2 =
() => (posts: Post[]): FilterGroup => ({
  name: "Datum",
  options: toDatesOptions2(posts)

});



export const toDatesOptions =
() =>  _flow(
  _map(({publishedAt})=> ({value: new Date(publishedAt).getFullYear().toString(), isSet:false})),
  _uniq
);
export const toDatesOptions2 =
(posts:Post[]) =>  _flow(
  _map(({publishedAt})=> ({value: new Date(publishedAt).getFullYear().toString(), isSet:false})),
  _uniq
)(posts);






