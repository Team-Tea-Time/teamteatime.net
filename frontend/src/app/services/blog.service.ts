import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Service } from './service';

import { Post } from '../models/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService extends Service {
  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = '/api/posts';

  constructor(private http: Http) {
    super();
  }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
               .toPromise()
               .then(response => response.json().data as Post[])
               .catch(this.handleError);
  }

  getPost(id: number): Promise<Post> {
    const url = `${this.postsUrl}&id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data[0] as Post)
      .catch(this.handleError);
  }
}
