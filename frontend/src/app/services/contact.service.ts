import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Service } from './service';

@Injectable()
export class ContactService extends Service {
  private url = '/api/contact';

  sendMessage(email_address: string, email: string, message: string) {
    return this.post(this.url, { email_address, email, message });
  }
}
