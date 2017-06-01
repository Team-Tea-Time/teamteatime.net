import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/post';
import { BlogService } from '../../../services/blog.service';

import slugify from 'slugify';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class AdminPostsComponent implements OnInit {
  posts: Post[];
  error: string;

  constructor(private blogService: BlogService) { }

  getPosts(): void {
    this.blogService.getPosts().subscribe(
      posts => this.posts = posts,
      error => this.error = <any>error
    );
  }

  slugify(title): string {
    return slugify(title);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
