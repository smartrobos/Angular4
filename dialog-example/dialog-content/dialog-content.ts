import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dialog-content',
    templateUrl:'dialog-content.html'

  })
  export class DialogContent {
  
    constructor(
      public dialogRef: MatDialogRef<DialogContent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }
    public MultiInput: any;
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
