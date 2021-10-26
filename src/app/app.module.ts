import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';
import { MaterialTableComponent } from './material-table/material-table.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  providers: [ {provide: APP_BASE_HREF, useValue: '/'} ] ,
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, HtmlTableComponent, MaterialTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
