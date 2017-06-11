import { Injectable } from '@angular/core';

import { Service } from './service';

@Injectable()
export class AuthService extends Service {
  auth = null;

  login(identity: string, password: string) {
    return this.client().post('/api/auth', { identity, password })
     .map(response => {
       localStorage.setItem('auth', response.text());
       return response.json();
     });
  }

  verify() {
    let token = this.auth.token;
    return this.post('/api/auth/verify', { token });
  }

  clear() {
    localStorage.removeItem('auth');
    this.auth = null;
  }

  getAuth() {
    if (!this.auth) {
      this.auth = JSON.parse(localStorage.getItem('auth'));
    }

    return this.auth;
  }
}
