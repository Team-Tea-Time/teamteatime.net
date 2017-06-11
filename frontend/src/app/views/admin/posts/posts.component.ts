import { Component, OnInit } from '@angular/core';

import { Post } from 'app/models/post.model';
import { BlogService } from 'app/services/blog.service';
import { SplashService } from 'app/services/splash.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class AdminPostsComponent implements OnInit {
  total: number;
  posts: Post[];
  page: number = 1;
  error: string;

  constructor(
    private blogService: BlogService,
    private splashService: SplashService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts(this.page).subscribe(data => {
      this.total = data.total;
      this.posts = data.posts;
    });
  }

  goToPage(page: number) {
    this.page = page;
    this.getPosts();
  }

  delete(post) {
    if (confirm(`Are you sure you want to remove the post titled '${post.title}'?`)) {
      this.blogService.deletePost(post._id).subscribe(
        document => {
          this.posts = this.posts.filter(p => {
            return p._id !== document._id
          });
          this.toastService.add('success', `'${document.title}' deleted.`);
        },
        error => this.error = <any>error
      )
    }
  }
}
