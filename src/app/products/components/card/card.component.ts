import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Product } from '../../models/product';
import { deleteProduct, setselectedProduct } from '../../store/product.actions';
import { ProductState } from '../../store/product.reducer';
@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()product!: Product;
  constructor(private store: Store<ProductState>, private router: Router, private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  setProduct(){
    this.store.dispatch(setselectedProduct({selectedProduct: this.product}))
  }

  onDeleteProduct(){
    this.setProduct();
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Are you sure want to delete this Product?',
        buttonText: {
          ok: 'Delete',
          cancel: 'Cancel'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.store.dispatch(deleteProduct({id:this.product.id}));
        this.router.navigate(['/products']);
        this.snackBar.open('Product deleted successfully', '', {
          duration: 2000,
          panelClass:'blue-snackbar'
        });
      }
    });
  }

}


