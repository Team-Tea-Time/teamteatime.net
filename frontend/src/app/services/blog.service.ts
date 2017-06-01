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

  getPost(): Observable<Post> {
    return this.http.get(this.url)
      .map(this.extractData);
  }

  createPost(data): Observable<Post> {
    return this.http.post(this.url, data)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
