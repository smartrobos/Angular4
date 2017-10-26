import { Component, OnInit } from '@angular/core';
import {MaterialModule} from './materialmodule';

@Component({
  selector: 'material-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  ngOnInit() {
  }


}
