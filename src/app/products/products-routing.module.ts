import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path:'products',
    component:ProductListComponent,
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'add-product',
    component:AddComponent
  },
  {
    path:'edit-product',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
