export class Toast {
  type: string;
  message: string;
  class: string = null;

  constructor(type: string, message: string) {
    this.type = type;
    this.message = message;
  }
}
