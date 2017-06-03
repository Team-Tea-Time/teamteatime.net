import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'app/models/post.model';
import { BlogService } from 'app/services/blog.service';
import { SplashService } from 'app/services/splash.service';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  tag: string = null;
  total: number;
  posts: Post[];
  page: number = 1;

  constructor(
    private blogService: BlogService,
    private splashService: SplashService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.splashService.setTitle(`Tagged posts: ${params['tag']}`);
      }
      this.getPosts();
    });
  }

  getPosts(): void {
    let observable = (this.tag)
      ? this.blogService.getPostsByTag(this.tag, this.page)
      : this.blogService.getPosts(this.page);

    observable.subscribe(data => {
      this.total = data.total;
      this.posts = data.posts;
    });
  }

  goToPage(page: number) {
    this.page = page;
    this.getPosts();
  }
}
