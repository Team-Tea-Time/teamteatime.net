import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

import * as moment from 'moment';

@Directive({
  selector: '[moment]'
})
export class MomentDirective implements OnChanges {
  @Input() datetime: string;
  @Input() fromNow: boolean = true;
  @Input() format: string = 'MMMM Do YYYY';

  constructor(private el: ElementRef) { }

  ngOnChanges(changes) {
    let m = moment(changes.datetime.currentValue);
    this.el.nativeElement.textContent = this.fromNow
      ? m.fromNow()
      : m.format(this.format);
  }
}
