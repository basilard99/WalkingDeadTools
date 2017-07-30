import { FactionNameType } from '../faction-name-type/faction-name-type';

export class Faction {
  private _name: FactionNameType;

  get name():string {
    return this._name.value;
  }
  set name(name:string) {
    this._name = new FactionNameType(name);
  }
}
