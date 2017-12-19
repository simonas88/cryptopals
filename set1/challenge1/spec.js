const {
  getIntsFromHex,
} = require('./index');

describe('Set 1 specs', () => {
  it('should read hex string into integers', () => {
    const input = '4F62';

    const expectedOutput = [ 0b01001111, 0b01100010 ];

    expect(getIntsFromHex(input)).toEqual(expectedOutput);
  });
});
