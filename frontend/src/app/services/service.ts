export class Service {
  protected handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
