import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../../../../services/blog.service';

@Component({
  selector: 'app-create',
  templateUrl: '../edit/edit.component.html',
  styleUrls: ['./create.component.less']
})
export class AdminPostsCreateComponent implements OnInit {
  model: any = {};
  loading = false;
  editing = false;
  errors = {
    title: null,
    body: null
  };

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
  }

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
