import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlTableComponent } from './html-table/html-table.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'html', component: HtmlTableComponent },
  { path: 'material', component: MaterialTableComponent },
  // { path: '',   redirectTo: '/html', pathMatch: 'full' }, // redirect to `html`  // remove this line to work with PageNotFound
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
