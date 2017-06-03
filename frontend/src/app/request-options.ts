import { Injectable } from '@angular/core';
import { BaseRequestOptions } from '@angular/http';

@Injectable()
export class GlobalRequestOptions extends BaseRequestOptions {
  constructor() {
      super();
      let auth = JSON.parse(localStorage.getItem('auth'));

      if (auth) {
        this.headers.append('x-access-token', JSON.parse(localStorage.getItem('auth')).token);
      }
  }
}
