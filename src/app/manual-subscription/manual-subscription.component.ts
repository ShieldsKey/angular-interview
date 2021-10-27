import { Component, OnInit } from '@angular/core';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../subscriptionServices';

@Component({
  selector: 'app-subscribing-observables',
  templateUrl: './manual-subscription.component.html'
})
export class ManualSubscriptionsComponent implements OnInit {
    show = true;
    first: string;
    second: string;
    third: number;

    ngOnInit() {

      getSingleValueObservable()
        .subscribe(value => this.first = value);
  
      getDelayedValueObservable()
        .subscribe(value => this.second = value);

      getMultiValueObservable()
        .subscribe(value => this.third = value);
    }
  }
