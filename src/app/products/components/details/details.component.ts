import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Product } from '../../models/product';
import { deleteProduct } from '../../store/product.actions';
import { ProductState } from '../../store/product.reducer';
import { selectedProduct } from '../../store/product.selectors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product$!: Observable<Product>;
  id!: string;
  constructor(
    private store:Store<ProductState>, private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.store.dispatch(loadProduct({id: this.activatedRoute.snapshot.paramMap.get("id")!}));
    this.product$= this.store.select(selectedProduct);
    this.product$.subscribe(product => this.id=product.id);

  }

  onDelete(){
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
        this.store.dispatch(deleteProduct({id:this.id}));
        this.router.navigate(['/products']);
        this.snackBar.open('Product deleted successfully', '', {
          duration: 2000,
          panelClass:'blue-snackbar'
        });
      }
    });
  }

}
