import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Toast } from 'app/models/toast.model';

@Injectable()
export class ToastService {
  private toasts: Toast[] = [];
  public bag: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>(null);

  public add(type: string, message: string) {
    let toast = new Toast(type, message);
    this.toasts.push(toast);
    this.bag.next(this.toasts);

    setTimeout(() => {
      this.dismiss(toast);
      this.bag.next(this.toasts);
    }, 5000);
  }

  public dismiss(toast: Toast) {
    let index = this.toasts.indexOf(toast);
    if (index !== -1) {
      this.toasts[index].class = 'dismiss';
      this.bag.next(this.toasts);

      setTimeout(() => {
        this.toasts.splice(index, 1);
        this.bag.next(this.toasts);
      }, 250);
    }
  }
}
