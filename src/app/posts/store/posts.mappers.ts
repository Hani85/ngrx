// import { flow as _flow, map as _map, uniq as _uniq } from "lodash";
import { flow as _flow, map as _map, uniq as _uniq , sortBy as _sortBy, orderBy as _orderBy} from "lodash/fp";

import { map } from "rxjs";
import { Post } from "./post.model";



export const getSources =
() =>
_flow(
  _map("source"),
  _uniq
)
// export const getPublishedAt =
// () =>
// _flow(
//   _map("publishedAt"),
//   _uniq
// )


export const getPublishedAt =
() =>
_flow(
  _map(({publishedAt})=> new Date(publishedAt).getFullYear().toString()),
  _uniq,
)
