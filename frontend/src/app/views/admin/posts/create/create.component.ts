import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from 'app/services/blog.service';

@Component({
  templateUrl: '../edit/edit.component.html'
})
export class AdminPostsCreateComponent {
  model: any = {};
  loading = false;
  editing = false;
  errors = {
    title: null,
    body: null
  };

  constructor(private router: Router, private blogService: BlogService) {}

  submit() {
    this.loading = true;
    this.blogService.createPost(this.model)
      .subscribe(
        post => {
          this.loading = false;
          this.router.navigate(['/admin/posts']);
        },
        error => {
          this.loading = false;
          this.errors = error.json();
        }
      );
  }
}
