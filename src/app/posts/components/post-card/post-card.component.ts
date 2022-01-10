import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setselectedPost } from '../../store/post.actions';
import { Post } from '../../store/post.model';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input()post!: Post;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setPost(){
    this.store.dispatch(setselectedPost({selectedPost: this.post}))
  }

}
