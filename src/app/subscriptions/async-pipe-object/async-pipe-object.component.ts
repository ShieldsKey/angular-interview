import { Component, OnInit } from '@angular/core';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../../subscriptionServices';

@Component({
    selector: 'app-async-pipe-object',
    templateUrl: './async-pipe-object.component.html'
  })
  export class AsyncPipeObjectComponent {
    show = false;
    first$ = getSingleValueObservable();
    second$ = getDelayedValueObservable();
    third$ = getMultiValueObservable();
  }
  