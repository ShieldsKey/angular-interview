import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlTableComponent } from './html-table/html-table.component';
import { ManualSubscriptionsComponent } from './manual-subscription/manual-subscription.component';

const routes: Routes = [
  { path: 'html', component: HtmlTableComponent },
  { path: 'manual', component: ManualSubscriptionsComponent },
  { path: '',   redirectTo: '/manual', pathMatch: 'full' }, // redirect to `html`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
