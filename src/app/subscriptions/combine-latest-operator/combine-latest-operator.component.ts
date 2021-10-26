import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../../subscriptionServices';

@Component({
    selector: 'app-combine-latest-operator',
    templateUrl: './combine-latest-operator.component.html'
  })
  export class CombineLatestOperatorComponent {
    show = false;
    values$ = combineLatest([
      getSingleValueObservable(),
      getDelayedValueObservable(),
      getMultiValueObservable()
    ]
    ).pipe(
      map(([first, second, third]) => {
        // combineLatest returns an array of values, here we map those values to an object
        return { first, second, third };
      })
    );
  }