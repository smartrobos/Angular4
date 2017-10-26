import { Component, OnInit } from '@angular/core';
import {MaterialModule} from './materialmodule';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.scss'],
 
})
export class SnackBarComponent implements OnInit {


constructor(public snackBar: MatSnackBar){ }

  ngOnInit() {}

  openSnackbar() {
    this.snackBar.open('I\'m a notification!', 'Close', {
      duration: 3000
    });
  }

}