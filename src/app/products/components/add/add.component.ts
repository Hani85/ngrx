import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addProduct } from '../../store/product.actions';
import { ProductState } from '../../store/product.reducer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('form')
  addProductForm!: NgForm;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){

    this.store.dispatch(addProduct({product: f.value}));
  }


}
