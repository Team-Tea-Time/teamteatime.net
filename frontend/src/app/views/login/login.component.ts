import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
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
      .then(response => {
        this.loading = false;
        this.router.navigate(['/admin']);
      })
      .catch(response => {
        this.loading = false;
        this.error = response.json().message;
      });
  }
}
