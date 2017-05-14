import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/posts', label: 'Posts' },
    { path: '/admin/users', label: 'Users' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
