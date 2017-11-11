import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, MatPaginatorModule,MatTableModule,MatSnackBarModule,MatExpansionModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
  FlexLayoutModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, 
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule, 
  MatIconModule, 
  MatInputModule, 
  MatListModule,
  MatMenuModule, 
  MatNativeDateModule, 
  MatProgressBarModule, 
  MatProgressSpinnerModule, 
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, 
  MatSnackBarModule,
  MatExpansionModule, 
  MatTabsModule, 
  MatToolbarModule, 
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule
  ],
  
  
})
export class MaterialUiModule { }
