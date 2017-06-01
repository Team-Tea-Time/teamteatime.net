import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

import * as moment from 'moment';

@Directive({
  selector: '[momentAgo]'
})
export class MomentAgoDirective implements OnChanges {
  @Input() datetime: string;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes) {
    this.el.nativeElement.textContent = moment(changes.datetime.currentValue).fromNow();
  }
}
