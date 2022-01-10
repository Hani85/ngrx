import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { loadProduct, updateProduct } from '../../store/product.actions';
import { ProductState } from '../../store/product.reducer';
import { selectedProduct } from '../../store/product.selectors';
import { Product } from "../../models/product";
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  model:any= {};

  constructor(private store:Store<ProductState>,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.pipe(select(selectedProduct)).subscribe(product=>
      this.model= Object.assign(new Product(), product)
      );
  }

  onSubmit(){
    const Update: Update<Product>= {
      id: this.model.id,
      changes: this.model
    }
    this.store.dispatch(updateProduct({product: Update}));
  }

}
