import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { MaterialUiModule } from './material.module';
import { MatIconRegistry } from '@angular/material';


import { AppComponent } from './app.component';
import { DialogContent } from './dialog-content/dialog-content';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,    
    HttpModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  exports:[ MaterialUiModule ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
  entryComponents: [DialogContent]
})
export class AppModule { }
