import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Post } from 'app/models/post.model';
import { Service } from './service';

@Injectable()
export class BlogService extends Service {
  private url = '/api/posts';

  getPosts(page = null) {
    let url = (page) ? `${this.url}?page=${page}` : this.url;
    return this.get(url);
  }

  getPostsByTag(tag: string, page = null) {
    let encodedTag = encodeURI(tag);
    let url = `${this.url}/tag/${encodedTag}`;
    return this.get((page) ? `${url}?page=${page}` : url);
  }

  getPost(id: string): Observable<Post> {
    return this.get(`${this.url}/${id}`);
  }

  getPostBySlug(slug: string): Observable<Post> {
    return this.get(`${this.url}/slug/${slug}`);
  }

  createPost(data: Post): Observable<Post> {
    return this.post(this.url, data);
  }

  updatePost(post: Post): Observable<Post> {
    return this.put(`${this.url}/${post._id}`, post);
  }

  deletePost(id: string): Observable<Post> {
    return this.delete(`${this.url}/${id}`);
  }
}
