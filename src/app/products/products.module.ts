import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { MatsharedModule } from '../shared/material/matshared.module';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { SharedStoreModule } from '../shared/store/shared-store.module';



@NgModule({
  declarations: [
    ProductListComponent,
    CardComponent,
    DetailsComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatsharedModule,
    SharedStoreModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.ProductReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
