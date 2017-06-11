import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { BlogService } from 'app/services/blog.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './edit.component.html'
})
export class AdminPostsEditComponent implements OnInit {
  loading: Subscription;
  model: any = {};
  initialBody: string;
  editing: boolean = false;
  errors = {
    title: null,
    slug: null,
    body: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loading = this.blogService.getPost(params['id'])
          .subscribe(
            post => {
              this.editing = true;
              this.model._id = post._id;
              this.model.title = post.title;
              this.model.slug = post.slug;
              this.model.body = post.body;
              this.initialBody = post.body;
              this.model.tags = post.tags;
            },
            error => {
              this.errors = error.json();
            }
          )
      }
    });
  }

  submit() {
    let observable = this.editing
      ? this.blogService.updatePost(this.model)
      : this.blogService.createPost(this.model);

    this.loading = observable.subscribe(
        post => {
          this.router.navigate(['/admin/posts']);
          this.toastService.add('success', `'${post.title}' saved.`);
        },
        error => {
          this.errors = error.json();
        }
      );
  }
}
