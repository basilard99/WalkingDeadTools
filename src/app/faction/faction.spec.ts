import { Faction } from './faction';
import { FactionNameType } from '../faction-name-type/faction-name-type';

describe('Faction', () => {
  it('should be created', () => {
    var cut = new Faction();
    expect(cut).toBeTruthy();
  });

  it('should return the name as created', () => {
    var cut = new Faction();
    cut.name = 'Roark\'s Drifters';
    expect(cut.name).toBe('Roark\'s Drifters');
  });

});
