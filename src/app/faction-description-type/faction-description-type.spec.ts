import { FactionDescriptionType } from './faction-description-type';

describe('FactionDescriptionType', () => {
  it('should be created when given valid description', () => {
    var cut = new FactionDescriptionType('test');
    expect(cut).toBeTruthy();
  });

  it('should throw an error if created with a null string', () => {
    expect(() => { new FactionDescriptionType(null); })
      .toThrow(new RangeError('description cannot be null'));
  });

  it('should throw an error if created with an empty string', () => {
    expect(() => { new FactionDescriptionType(''); })
      .toThrow(new RangeError('description cannot be empty'));
  });

  it('should throw an error if created with a string greater than 200 characters', () => {
    var testString = 'a'.repeat(201);
    expect(() => { new FactionDescriptionType(testString); })
      .toThrow(new RangeError('description cannot contain more than 200 characters'));
  });

  it('should throw an error if created with a string that contains invalid characters', () => {
    expect(() => { new FactionDescriptionType('test@'); })
      .toThrow(new RangeError('description cannot contain invalid characters'));
  });

  it('should return the description as created', () => {
    var cut = new FactionDescriptionType('A wonderful group of (history) nerds!');
    expect(cut.value).toBe('A wonderful group of (history) nerds!');
  });
});
