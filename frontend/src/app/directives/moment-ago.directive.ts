import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

import * as moment from 'moment';

@Directive({
  selector: '[momentAgo]'
})
export class MomentAgoDirective implements OnChanges {
  @Input() timestamp: number;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes) {
    let timestamp = changes.timestamp.currentValue / 1000;
    this.el.nativeElement.textContent = moment.unix(timestamp).fromNow();
  }
}
