import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MatsharedModule } from '../../material/matshared.module';



@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatsharedModule
  ],
  exports: [ConfirmationDialogComponent]
})
export class ConfirmationDialogModule { }
