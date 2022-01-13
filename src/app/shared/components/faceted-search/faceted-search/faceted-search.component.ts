import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FilterGroup } from 'src/app/shared/models/filter-group.interface';
import { cloneDeep as _cloneDeep, forEach as _forEach } from 'lodash';
import { FilterGroupOption } from 'src/app/shared/models/filter-group-option.interface';

@Component({
  selector: 'app-faceted-search',
  templateUrl: './faceted-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./faceted-search.component.scss'],
})
export class FacetedSearchComponent implements OnChanges {
  @Input('filterGroups') inputFilterGroups!: FilterGroup[];

  @Output() change = new EventEmitter<FilterGroup[]>();
  filterGroups: FilterGroup[] =[];



  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputFilterGroups']) {

      this.filterGroups =
        _cloneDeep(changes['inputFilterGroups'].currentValue) || [];

    }
  }

  reset(filterGroups: FilterGroup[]): void {
    _forEach(filterGroups, (filterGroup: FilterGroup) => {
      _forEach(filterGroup.options, (filterGroupOption: FilterGroupOption) => {
        filterGroupOption.isSet = false;
      });
    });

    this.emitChange(filterGroups);
  }

  emitChange(filterGroups: FilterGroup[]): void {
    this.change.emit(_cloneDeep(filterGroups));
  }

  trackByFilterGroupName(_: number, filterGroup: FilterGroup): string {
    return filterGroup.name;
  }

  trackByFilterGroupOptionValue(_: number, option: FilterGroupOption): string {
    return option.value;
  }

}
