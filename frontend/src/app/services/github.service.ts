import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private url = '/api/github';

  constructor(private http: Http) {}

  getBranches(repo: string) {
    return this.http.get(`${this.url}/${repo}/branches`)
      .map(this.extractData);
  }

  getTree(repo: string, sha: string) {
    return this.http.get(`${this.url}/${repo}/tree/${sha}`)
      .map(this.extractData);
  }

  getBlob(repo: string, sha: string, render: boolean = false) {
    let query = (render) ? '?rendered=1' : '';
    return this.http.get(`${this.url}/${repo}/blob/${sha}${query}`)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
