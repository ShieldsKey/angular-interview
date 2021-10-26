import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlTableComponent } from './html-table/html-table.component';
import { AsyncPipeObjectComponent } from './subscriptions/async-pipe-object/async-pipe-object.component';
import { CombineLatestOperatorComponent } from './subscriptions/combine-latest-operator/combine-latest-operator.component';
import { ForkJoinOperatorComponent } from './subscriptions/fork-join-operator/fork-join-operator.component';
import { ManualSubscriptionsComponent } from './subscriptions/manual-subscription/manual-subscription.component';

const routes: Routes = [
    { path: 'html', component: HtmlTableComponent },
    { path: 'manual', component: ManualSubscriptionsComponent },
    { path: 'forkJoin', component: ForkJoinOperatorComponent },
    { path: 'combineLatest', component: CombineLatestOperatorComponent },
    { path: 'asyncPipeObject', component: AsyncPipeObjectComponent },
    { path: '',   redirectTo: '/asyncPipeObject', pathMatch: 'full' } // redirect to `html`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
