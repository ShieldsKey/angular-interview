import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, HtmlTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
