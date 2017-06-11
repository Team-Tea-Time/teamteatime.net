import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Service {
  constructor(private http: Http) {}

  get(url: string) {
    return this.http.get(url).map(this.extractData);
  }

  post(url: string, data: any) {
    return this.http.post(url, data).map(this.extractData);
  }

  put(url: string, data: any) {
    return this.http.put(url, data).map(this.extractData);
  }

  delete(url: string) {
    return this.http.delete(url).map(this.extractData);
  }

  client() {
    return this.http;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
