export class FactionNameType {
  private _name: string

  constructor(name:string) {
    if (name.length === 0) {
      throw new RangeError('name cannot be empty');
    }
    if (name.length > 20) {
      throw new RangeError('name cannot be longer than 20 characters');
    }

    var regexp = new RegExp('^[0-9A-Za-z \']{1,20}$');
    if (regexp.test(name) === false) {
      throw new RangeError('name cannot contain invalid characters')
    }

    this._name = name;
  }

  get value():string {
    return this._name;
  }
}
