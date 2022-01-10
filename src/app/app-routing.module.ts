import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes= [
  {
    path:"",
    loadChildren: () => import('./products/products.module').then(mod=>mod.ProductsModule)
  },
  {
    path:"posts",
    loadChildren: () => import('./posts/posts.module').then(mod=>mod.PostsModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
