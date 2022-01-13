import { map } from "rxjs";
import { Post } from "../store/post.model";
import { FilterGroup } from "src/app/shared/models/filter-group.interface";
import {every as _every, filter as _filter} from "lodash" ;
import {find as _find, isEmpty as _isEmpty, map as _map, flow as _flow, some as _some, contains as _contains, flow} from "lodash/fp" ;
import { FilterGroupOption } from "src/app/shared/models/filter-group-option.interface";

export const filteredPosts = () =>
map(
  ([filterGroups, postList]:[FilterGroup[],Post[]
  ]):Post[] =>
  _isEmpty(filterGroups)
  ?postList
  :_filter(postList,(post) =>
    _every(filterGroups,({options,name}) =>{
      switch(name){
        case "Source": {
          return containsSources(options,post);
        }
        case "Datum": {
          return containsDates(options,post);
        }
        default:{
          return true;
        }
      }
    }),
  ),
);


export const containsSources = (
  options: FilterGroupOption[],
  {source}: Post,
) => containsPostValues(_map('value')(options), _map('source')(source))

export const containsDates = (
  options: FilterGroupOption[],
  {source}: Post,
) => containsPostValues(_map('value')(options), _map('publishedAt')(source))


export const containsPostValues = (
  optionValues: string[],
  postValues: string[]
) =>
  -flow(_some((optionValue) => _contains(optionValue)(postValues)))(optionValues);
