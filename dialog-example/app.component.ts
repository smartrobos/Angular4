import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogContent } from './dialog-content/dialog-content';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fromDate: any;
  endDate: any;
  days: any;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogContent, {

      width: '300px',
      data: { fromDate: this.fromDate, endDate: this.endDate, days: this.days }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fromDate = result.fromDate;
      this.endDate = result.endDate;
      this.days = result.days;
      console.log(result.fromDate);
      console.log(result.endDate);
      console.log(result.days);

    });
  }
}
