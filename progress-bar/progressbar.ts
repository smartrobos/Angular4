import {Component} from '@angular/core';
import {MaterialModule} from './materialmodule';

@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html',
  styleUrls: ['progressbar.scss'],
})
export class ProgressBarComponent {
   color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}