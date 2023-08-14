import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './dialog.component';
import { PositiveDialogComponent } from './dialog.component';
import { NegativeDialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  // confirm
  openDialogConfirm(data: any): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        content: data,
      },
    });

    // dialogRef.afterClosed().subscribe(result => {
    // 	console.log(result);
    return dialogRef.afterClosed();
  }

  // positive
  openDialogPositive(data: any) {
    const dialogRef = this.dialog.open(PositiveDialogComponent, {
      data: {
        content: data,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog close');
    });
  }

  // negative
  openDialogNegative(data: any) {
    const dialogRef = this.dialog.open(NegativeDialogComponent, {
      data: {
        content: data,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog close');
    });
  }
}
