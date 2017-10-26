import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lists',
  templateUrl: 'lists.component.html',
  styleUrls: ['lists.component.scss'],

})
export class ListsComponent implements OnInit {


  constructor() { }
typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  ngOnInit() {
  }

}