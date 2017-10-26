import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MaterialModule} from './materialmodule';


@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete.html',
  styleUrls: ['autocomplete.css']
})
export class AutocompleteComponent implements OnInit{

formControl: FormControl;

  options: any[];

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl();

    this.options = [
      'Apple',
      'Apricot',
      'Avocado',
      'Banana',
      'Bilberry',
      'Blackberry',
      'Blackcurrant',
      'Blueberry',
      'Boysenberry',
      'Currant',
      'Cherry',
      'Cherimoya',
      'Cloudberry',
      'Coconut',
      'Cranberry',
      'Cucumber',
      'Custard apple',
      'Damson',
      'Date',
      'Dragonfruit',
      'Durian',
      'Elderberry',
      'Feijoa',
      'Fig',
      'Goji berry',
      'Gooseberry',
      'Grape',
      'Raisin',
      'Grapefruit',
      'Guava',
      'Honeyberry',
      'Huckleberry',
      'Jabuticaba',
      'Jackfruit',
      'Jambul',
      'Jujube',
      'Juniper berry',
      'Kiwi',
      'Kumquat',
      'Lemon',
      'Lime',
      'Loquat',
      'Longan',
      'Lychee',
      'Mango',
      'Marionberry',
      'Melon',
      'Cantaloupe',
      'Honeydew',
      'Watermelon',
      'Miracle fruit',
      'Mulberry',
      'Nectarine',
      'Nance',
      'Olive',
      'Orange',
      'Blood orange',
      'Clementine',
      'Mandarine',
      'Tangerine',
      'Papaya',
      'Passionfruit',
      'Peach',
      'Pear',
      'Persimmon',
      'Physalis',
      'Plantain',
      'Plum',
      'Prune (dried plum)',
      'Pineapple',
      'Plumcot (or Pluot)',
      'Pomegranate',
      'Pomelo',
      'Purple mangosteen',
      'Quince',
      'Raspberry',
      'Salmonberry',
      'Rambutan',
      'Redcurrant',
      'Salal berry',
      'Salak',
      'Satsuma',
      'Star fruit',
      'Solanum quitoense',
      'Strawberry',
      'Tamarillo',
      'Tamarind',
      'Ugli fruit',
      'Yuzu',
    ];
  }
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */