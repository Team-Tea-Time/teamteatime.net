import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Service } from './service';

@Injectable()
export class AuthService extends Service {
  auth = null;

  constructor(private http: Http) {
    super();
    this.auth = JSON.parse(localStorage.getItem('auth'));
  }

  login(identity: string, password: string) {
    return this.http.post('/api/auth', { identity, password })
     .toPromise()
     .then(response => {
       this.auth = response.json();
       localStorage.setItem('auth', response.text());
     })
     .catch(this.handleError);
  }

  verify() {
    let token = this.auth.token;
    return this.http.post('/api/auth/verify', { token }).toPromise();
  }

  clear() {
    localStorage.removeItem('auth');
    this.auth = null;
  }

  getAuth() {
    return this.auth;
  }
}
