import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Service } from './service';

@Injectable()
export class GitHubService extends Service {
  private url = '/api/github';

  getBranches(repo: string) {
    return this.get(`${this.url}/${repo}/branches`);
  }

  getTree(repo: string, sha: string) {
    return this.get(`${this.url}/${repo}/tree/${sha}`);
  }

  getBlob(repo: string, sha: string, render: boolean = false) {
    let query = (render) ? '?rendered=1' : '';
    return this.get(`${this.url}/${repo}/blob/${sha}${query}`);
  }
}
