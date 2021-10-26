import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { ManualSubscriptionsComponent } from './manual-subscription/manual-subscription.component';

@NgModule({
  providers: [ {provide: APP_BASE_HREF, useValue: '/'} ] ,
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      RouterModule
    ],
  declarations: [
      AppComponent,
      HtmlTableComponent,
      ManualSubscriptionsComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
