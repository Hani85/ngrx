import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostsListComponent } from "./components/posts-list/posts-list.component";

const routes: Routes = [
  {
    path:'',
    component:PostsListComponent,
  },
  {
    path:'postdetail',
    component:PostDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
