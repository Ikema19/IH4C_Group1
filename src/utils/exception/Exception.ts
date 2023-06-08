export class Exception extends Error {
  private readonly _status: number;

  constructor(message: string, status = 500) {
    super(message);
    this._status = status;

    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  get status() {
    return this._status;
  }

  get isInternalError() {
    return this._status >= 500;
  }
}
