import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/post';
import { BlogService } from '../../../services/blog.service';

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

  delete(post) {
    if (confirm(`Are you sure you want to remove the post titled '${post.title}'?`)) {
      this.blogService.deletePost(post._id).subscribe(
        document => {
          this.posts = this.posts.filter(p => {
              return p._id !== document._id
          });
        },
        error => this.error = <any>error
      )
    }
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
