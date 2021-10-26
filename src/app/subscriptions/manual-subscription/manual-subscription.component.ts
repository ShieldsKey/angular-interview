import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../../subscriptionServices';

@Component({
  selector: 'app-subscribing-observables',
  templateUrl: './manual-subscription.component.html'
})
export class ManualSubscriptionsComponent implements OnInit, OnDestroy  {
    show = true;
    first: string;
    second: string;
    third: number;
    thirdSubscription: Subscription;

    ngOnInit() {

      getSingleValueObservable()
        .subscribe(value => this.first = value);
  
      getDelayedValueObservable()
        .subscribe(value => this.second = value);

    // the third one continues to send values
    // need to create a subscription so it can be unsubscribed when the component is destroyed
    // to avoid memory leaks

    this.thirdSubscription = getMultiValueObservable()
        .subscribe(value => this.third = value);
    }

    // Multi value observables must manually
    // unsubscribe to prevent memory leaks.
    ngOnDestroy() {
        this.thirdSubscription.unsubscribe();
      }

  }
