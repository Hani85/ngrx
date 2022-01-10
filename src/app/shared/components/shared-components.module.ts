import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacetedSearchComponent } from './faceted-search/faceted-search/faceted-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FacetedSearchComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule
  ]
})
export class SharedComponentsModule { }
