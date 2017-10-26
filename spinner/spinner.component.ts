import { Component} from '@angular/core';
import {MaterialModule} from './materialmodule';
@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor() { }


}
