import { Component, OnInit } from '@angular/core';
import {MaterialModule} from './materialmodule';

import {FormControl} from "@angular/forms";

@Component({
  selector: 'material-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent implements OnInit {



  formControl: FormControl;

  options: any[];

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl();
  }


}
