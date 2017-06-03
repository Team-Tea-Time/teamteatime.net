import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import hljs from 'highlight.js';

import { Post } from 'app/models/post';
import { AuthService } from 'app/services/auth.service';
import { BlogService } from 'app/services/blog.service';
import { SplashService } from 'app/services/splash.service';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  auth: object;

  constructor(
    private authService: AuthService,
    private blogService: BlogService,
    private splashService: SplashService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.splashService.setTitle('');

    this.route.params.subscribe(params => {
      this.blogService.getPostBySlug(params['slug'])
        .subscribe(
          post => {
            this.splashService.setTitle(post.title);
            this.post = post;
            setTimeout(function() {
              let matches = document.body.querySelectorAll('pre code');
              Array.from(matches).forEach(element => {
                hljs.highlightBlock(element);
              });
            }, 1);
          }
        );
    });

    this.auth = this.authService.getAuth();
  }
}
