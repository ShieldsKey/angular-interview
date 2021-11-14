import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {APP_BASE_HREF} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  providers: [ {provide: APP_BASE_HREF, useValue: '/'} ] ,
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      RouterModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      HttpClientModule,
      BrowserAnimationsModule
    ],
  declarations: [
      AppComponent,
      HelloComponent,
      HtmlTableComponent,
      MaterialTableComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
