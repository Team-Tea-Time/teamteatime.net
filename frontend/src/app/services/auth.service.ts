import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AuthService {
  auth = null;

  constructor(private http: Http) {}

  login(identity: string, password: string) {
    return this.http.post('/api/auth', { identity, password })
     .map(response => {
       localStorage.setItem('auth', response.text());
       return response.json();
     });
  }

  verify() {
    let token = this.auth.token;
    return this.http.post('/api/auth/verify', { token });
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
