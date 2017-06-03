import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';

@Injectable()
export class BlogService {
  private url = '/api/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.url)
      .map(this.extractData);
  }

  getPost(postId): Observable<Post> {
    return this.http.get(`${this.url}/${postId}`)
      .map(this.extractData);
  }

  getPostBySlug(slug): Observable<Post> {
    return this.http.get(`${this.url}/slug/${slug}`)
      .map(this.extractData);
  }

  createPost(data): Observable<Post> {
    return this.http.post(this.url, data)
      .map(this.extractData);
  }

  updatePost(post): Observable<Post> {
    return this.http.put(`${this.url}/${post._id}`, post)
      .map(this.extractData);
  }

  deletePost(postId): Observable<Post> {
    return this.http.delete(`${this.url}/${postId}`)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
