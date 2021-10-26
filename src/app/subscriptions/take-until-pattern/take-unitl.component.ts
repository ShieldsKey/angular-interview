import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../../subscriptionServices';

@Component({
  selector: 'app-take-until-observables',
  templateUrl: './take-until.component.html'
})
export class TakeUntilComponent implements OnInit {
    show = false;
    first: string;
    second: string;
    third: number;
    fourth: number;

    private onDestroy$: Subject<void> = new Subject<void>();

    ngOnInit() {
        // we don't need to worry about the first two values since they return only one value
      getSingleValueObservable()
        .subscribe(value => this.first = value);
  
      getDelayedValueObservable()
        .subscribe(value => this.second = value);

        // to avoid memory leaks
        // leverages pipe to take until any value appears in onDestroy$
      getMultiValueObservable()
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(value => this.third = value);

      getMultiValueObservable()
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(value => this.fourth = value);
    }

    ngOnDestroy() {
      this.onDestroy$.next();
    }
  }
