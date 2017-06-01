import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../../../../services/blog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class AdminPostsCreateComponent implements OnInit {
  model: any = {};
  loading = false;
  error = null;

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
          this.error = error.message;
        }
      );
  }
}
