import { Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from 'app/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  loading: Subscription;
  model: any = {};
  error: string = null;

  constructor(private authService: AuthService) { }

  login() {
    this.loading = this.authService.login(this.model.identity, this.model.password)
      .subscribe(
        auth => {
          location.replace('/admin');
        },
        error => this.error = error.json().message
      );
  }
}
