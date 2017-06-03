import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  posts: Post[];
  error: string;

  constructor(private blogService: BlogService) { }

  getPosts(): void {
    this.blogService.getPosts().subscribe(
      posts => this.posts = posts,
      error => this.error = <any>error
    );
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
