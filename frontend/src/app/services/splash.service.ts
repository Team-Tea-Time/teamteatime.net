import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SplashService {
  private title = new Subject<any>();

  public setTitle(title: string) {
    this.title.next(title);
  }

  public getTitle(): Observable<any> {
    return this.title.asObservable();
  }
}
