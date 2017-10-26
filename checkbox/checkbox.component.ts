import { Component, OnInit } from '@angular/core';
import {MaterialModule} from './materialmodule';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {


  formControl: FormControl;
 checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  options: any[];

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl();

  }


}