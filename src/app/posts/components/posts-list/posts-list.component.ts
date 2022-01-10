import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Store } from '@ngrx/store';
import { map as _map } from 'lodash/fp';
import { concat, concatMap, map, mergeMap, Observable, switchMap } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { PostsFacade } from '../../application/posts.facade';
import { loadPosts } from '../../store/post.actions';
import { Post } from '../../store/post.model';
import { selectPosts, selectPublishedAtFilterOptions, selectSourceFilterOptions } from '../../store/post.selectors';

export class Unit {

  constructor(
    public name: string,
    public checked: boolean,
  ) {}
}
export class CheckboxList {

  name!: string;
  disabled!: boolean;
  checked!: boolean;
}

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  sourceFilterOptions$= this.store.select(selectSourceFilterOptions);
  publishedAtFilterOptions$= this.store.select(selectPublishedAtFilterOptions);
  posts!: Post[];
  filteredPosts!: Post[];
  checkeSourcesdOps!: string[];
  checkedpublishedAtOps!: string[];
  Sourcecheckbox_list:CheckboxList[] =[];
  PublishedAtcheckbox_list:CheckboxList[] =[];

  constructor(private store: Store<AppState>,  readonly postsFacade:PostsFacade) {

   }

  ngOnInit(): void {

    this.store.select(selectPosts)
    .subscribe(
      (posts) => {
        if(posts.length === 0){
          this.store.dispatch(loadPosts());
        }
        this.posts=this.filteredPosts=posts
      }



    );

    this.sourceFilterOptions$.subscribe(
      (options) => {
        options.forEach((option)=>{
          this.Sourcecheckbox_list.push({
            name: option,
            disabled: false,
            checked: false,
          })
        })
      }
    );


    this.publishedAtFilterOptions$.subscribe(
      (options) => {
        options.forEach((option)=>{
          this.PublishedAtcheckbox_list.push({
            name: option,
            disabled: false,
            checked: false,
          })
        })
      }
    );


  }

  change() {

    this.checkeSourcesdOps= _map("name")(this.Sourcecheckbox_list.filter((op)=>op.checked==true))
    this.checkedpublishedAtOps= _map("name")(this.PublishedAtcheckbox_list.filter((op)=>op.checked==true))
    console.log(this.checkeSourcesdOps)
    console.log(this.checkedpublishedAtOps)
    if(this.checkeSourcesdOps.length===0 && this.checkedpublishedAtOps.length===0){
      this.filteredPosts= this.posts;
    }
    else if(this.checkeSourcesdOps.length===0){
      this.filteredPosts= this.posts.filter((post)=> this.checkedpublishedAtOps.includes(new Date(post.publishedAt).getFullYear().toString()));
    }
    else if(this.checkedpublishedAtOps.length===0){
      this.filteredPosts= this.posts.filter((post)=> this.checkeSourcesdOps.includes(post.source));
    }else{
      this.filteredPosts= this.posts.filter((post)=> this.checkeSourcesdOps.includes(post.source) && this.checkedpublishedAtOps.includes(new Date(post.publishedAt).getFullYear().toString()));
    }
 }

onreset(){
  this.filteredPosts=this.posts;
  for (let value of Object.values(this.Sourcecheckbox_list)) {
    value.checked= false;
  }
  for (let value of Object.values(this.PublishedAtcheckbox_list)) {
    value.checked= false;
  }
}


}
