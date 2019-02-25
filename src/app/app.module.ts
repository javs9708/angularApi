import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MatSelectModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';

import { StatusFilterComponent } from './status-filter/status-filter.component';





@NgModule({
  declarations: [
    AppComponent,
    StatusFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
