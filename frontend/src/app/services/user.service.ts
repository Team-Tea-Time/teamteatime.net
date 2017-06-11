import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from 'app/models/user.model';
import { Service } from './service';

@Injectable()
export class UserService extends Service {
  private url = '/api/users';

  list() {
    return this.get(this.url);
  }

  getUser(id: string) {
    return this.get(`${this.url}/${id}`);
  }

  create(data) {
    return this.post(this.url, data);
  }

  update(data) {
    return this.put(`${this.url}/${data._id}`, data);
  }

  destroy(data) {
    return this.delete(`${this.url}/${data._id}`);
  }
}
