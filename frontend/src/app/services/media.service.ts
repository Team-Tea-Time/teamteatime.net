import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Service } from './service';

@Injectable()
export class MediaService extends Service {
  private url = '/api/media';

  getS3SignedURL(file: File): Observable<any> {
    return this.post(`${this.url}/signed-url`, { filename: file.name, mimetype: file.type });
  }

  completeS3Request(object) {
    return this.client().put(object.requestURL, object.file);
  }

  deleteObject(key: String): Observable<any> {
    return this.delete(`${this.url}/${key}`);
  }
}
