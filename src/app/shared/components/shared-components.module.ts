import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacetedSearchComponent } from './faceted-search/faceted-search/faceted-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FacetedSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  exports:[FacetedSearchComponent]
})
export class SharedComponentsModule { }
