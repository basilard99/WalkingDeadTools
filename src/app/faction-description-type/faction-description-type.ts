export class FactionDescriptionType {
  private _description: string;

  constructor(description:string) {
    if (description === null) {
      throw new RangeError('description cannot be null');
    }

    if (description.length === 0) {
      throw new RangeError('description cannot be empty');
    }

    if (description.length > 200) {
      throw new RangeError('description cannot contain more than 200 characters');
    }

    var regexp = new RegExp('^[0-9A-Za-z \'!*()]{1,200}$');
    if (regexp.test(description) === false) {
      throw new RangeError('description cannot contain invalid characters')
    }

    this._description = description;
  }
  get value():string {
    return this._description;
  }
}
