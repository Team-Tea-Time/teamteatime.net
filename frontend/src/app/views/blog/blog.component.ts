import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';

import slugify from 'slugify';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  posts: Post[];

  constructor(private blogService: BlogService) { }

  getPosts(): void {
    this.blogService
      .getPosts()
      .then(posts => this.posts = posts);
  }

  slugify(title): string {
    return slugify(title);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
