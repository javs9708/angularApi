import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {MatSelectModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { StatusFilterComponent } from './status-filter/status-filter.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    StatusFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgxPaginationModule,
    HttpModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
