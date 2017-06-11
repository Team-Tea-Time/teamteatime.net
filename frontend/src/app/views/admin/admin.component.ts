import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/services/auth.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  user: object;
  links = [
    { path: '/admin/projects', label: 'Projects' },
    { path: '/admin/posts', label: 'Posts' },
    { path: '/admin/users', label: 'Users' }
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getAuth().user;
  }

  logout() {
    this.authService.clear();
    this.router.navigate(['/']);
  }
}