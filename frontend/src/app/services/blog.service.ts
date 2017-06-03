import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from 'app/models/post.model';

@Injectable()
export class BlogService {
  private url = '/api/posts';

  constructor(private http: Http) {}

  getPosts(page = null) {
    let url = (page) ? `${this.url}?page=${page}` : this.url;
    return this.http.get(url)
      .map(this.extractData);
  }

  getPostsByTag(tag: string, page = null) {
    let encodedTag = encodeURI(tag);
    let url = `${this.url}/tag/${encodedTag}`;
    return this.http.get((page) ? `${url}?page=${page}` : url)
      .map(this.extractData);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get(`${this.url}/${id}`)
      .map(this.extractData);
  }

  getPostBySlug(slug: string): Observable<Post> {
    return this.http.get(`${this.url}/slug/${slug}`)
      .map(this.extractData);
  }

  createPost(data: Post): Observable<Post> {
    return this.http.post(this.url, data)
      .map(this.extractData);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put(`${this.url}/${post._id}`, post)
      .map(this.extractData);
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete(`${this.url}/${id}`)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
