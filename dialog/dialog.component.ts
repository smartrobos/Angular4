import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from "@angular/material";
@Component({
  selector: 'material-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],

})
export class DialogsComponent {

  dialogRef: MatDialogRef<DemoDialog>;
  result: string;


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialogRef = this.dialog.open(DemoDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.result = result;
      this.dialogRef = null;
    });
  }



}
@Component({
  selector: 'ms-demo-dialog',
  template: `
  <h3>Would you like to order pizza?</h3>

  <mat-dialog-actions align="end">
    <button mat-button (click)="dialogRef.close('No!')">No</button>
    <button mat-button color="primary" (click)="dialogRef.close('Yes!')">Yes</button>
  </mat-dialog-actions>
  `
})
export class DemoDialog {
  constructor(public dialogRef: MatDialogRef<DemoDialog>) { }
}
