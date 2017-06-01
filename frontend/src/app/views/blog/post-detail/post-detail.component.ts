import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from 'app/models/post';
import { BlogService } from 'app/services/blog.service';
import { SplashService } from 'app/services/splash.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(
    private blogService: BlogService,
    private splashService: SplashService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
}
