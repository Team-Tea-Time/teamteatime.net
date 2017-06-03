import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.identity, this.model.password)
      .subscribe(
        auth => {
          this.loading = false;
          this.router.navigate(['/admin']);
        },
        error => {
          this.loading = false;
          this.error = error.message;
        }
      );
  }
}
