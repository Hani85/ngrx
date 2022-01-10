import { FilterGroupOption } from "./filter-group-option.interface";

export interface FilterGroup{
  name: string;
  options: FilterGroupOption[];
  translationKey: string;
  translationParams?: object;

}
