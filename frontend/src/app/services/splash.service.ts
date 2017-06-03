import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SplashService {
  public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public setTitle(title: string) {
    this.title.next(title);
  }
}
