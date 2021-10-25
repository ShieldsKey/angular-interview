import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlTableComponent } from './html-table/html-table.component';

const routes: Routes = [
  { path: 'html', component: HtmlTableComponent },
  { path: '',   redirectTo: '/html', pathMatch: 'full' }, // redirect to `html`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
