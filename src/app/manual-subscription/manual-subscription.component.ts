import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../subscriptionServices';

@Component({
  selector: 'app-subscribing-observables',
  templateUrl: './manual-subscription.component.html'
})
export class ManualSubscriptionsComponent  {
    show = true;
    first: string;
    second: string;
    third: number;
    thirdSubscription: Subscription;
  
    ngOnInit() {
        // we don't need to worry about the first two values since they return only one value
      getSingleValueObservable()
        .subscribe(value => this.first = value);
  
      getDelayedValueObservable()
        .subscribe(value => this.second = value);

      getMultiValueObservable()
        .subscribe(value => this.third = value);
    }
  }
