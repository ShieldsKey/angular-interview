import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { ManualSubscriptionsComponent } from './subscriptions/manual-subscription/manual-subscription.component';
import { AsyncPipeObjectComponent } from './subscriptions/async-pipe-object/async-pipe-object.component';
import { CombineLatestOperatorComponent } from './subscriptions/combine-latest-operator/combine-latest-operator.component';
import { ForkJoinOperatorComponent } from './subscriptions/fork-join-operator/fork-join-operator.component';
import { TakeUntilComponent } from './subscriptions/take-until-pattern/take-unitl.component';

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
      ManualSubscriptionsComponent,
      AsyncPipeObjectComponent,
      CombineLatestOperatorComponent,
      ForkJoinOperatorComponent,
      TakeUntilComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
