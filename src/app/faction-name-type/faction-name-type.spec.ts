import { FactionNameType } from './faction-name-type';

describe('FactionNameType', () => {
  it('should be created', () => {
    var cut = new FactionNameType('test');
    expect(cut).toBeTruthy();
  });

  it('should throw an error if created with an empty string', () => {
    expect(() => { new FactionNameType(''); })
      .toThrow(new RangeError('name cannot be empty'));
  });

  it('should throw an error if created with a string longer than 20 characters', () => {
    expect(() => { new FactionNameType('aaaaaaaaaabbbbbbbbbbc'); })
      .toThrow(new RangeError('name cannot be longer than 20 characters'));
  });

  it('should throw an error if created with a string that contains invalid characters', () => {
    expect(() => { new FactionNameType('test!'); })
      .toThrow(new RangeError('name cannot contain invalid characters'));
  });

  it('should return the name as created', () => {
    var cut = new FactionNameType('Roark\'s Drifters');
    expect(cut.value).toBe('Roark\'s Drifters');
  });

});
