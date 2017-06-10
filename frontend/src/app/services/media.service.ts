import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {
  private url = '/api/media';

  constructor(private http: Http) {}

  getS3SignedURL(file: File): Observable<any> {
    return this.http.post(`${this.url}/signed-url`, { filename: file.name, mimetype: file.type })
      .map(this.extractData);
  }

  completeS3Request(object): Observable<any> {
    return this.http.put(object.requestURL, object.file);
  }

  deleteObject(key: String): Observable<any> {
    return this.http.delete(`${this.url}/${key}`)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
