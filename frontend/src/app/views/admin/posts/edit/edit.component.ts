import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BlogService } from '../../../../services/blog.service';

@Component({
  selector: 'app-create',
  templateUrl: './edit.component.html'
})
export class AdminPostsEditComponent implements OnInit {
  model: any = {};
  initialBody: string;
  loading = true;
  allowSlugChange = true;
  errors = {
    title: null,
    slug: null,
    body: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogService.getPost(params['id'])
        .subscribe(
          post => {
            this.loading = false;
            this.model._id = post._id;
            this.model.title = post.title;
            this.model.slug = post.slug;
            this.model.body = post.body;
            this.initialBody = post.body;
            this.model.tags = post.tags;
          },
          error => {
            this.loading = false;
            this.errors = error.json();
          }
        )
    });
  }

  submit() {
    this.loading = true;
    this.blogService.updatePost(this.model)
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
