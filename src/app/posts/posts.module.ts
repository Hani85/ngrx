import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './store/post.reducer';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MatsharedModule } from '../shared/material/matshared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SharedStoreModule } from '../shared/store/shared-store.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostsListComponent,
    PostCardComponent,
    PostDetailComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatsharedModule,
    PostsRoutingModule,
    MatExpansionModule,
    SharedStoreModule,
    SharedComponentsModule,
    MatsharedModule,
    StoreModule.forFeature(fromPost.postsFeatureKey, fromPost.postsReducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostsModule { }
