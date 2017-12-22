const {
  getIntsFromHex,
  convertToSixBits,
} = require('./index');

describe('Set 1 specs', () => {
  it('should read hex string into integers', () => {
    const input = '4F62';

    const expectedOutput = [ 0b01001111, 0b01100010 ];

    expect(getIntsFromHex(input)).toEqual(expectedOutput);
  });

  it('should convert three bytes into four bytes', () => {
    const input = [ 0b11001100, 0b11101110, 0b01110111 ];

    const expectedOutput = [ 0b00110011, 0b00001110, 0b00111001, 0b00110111 ];

    expect(convertToSixBits(input)).toEqual(expectedOutput);
  });

  it('should convert two bytes into three bytes', () => {
    const input = [ 0b11001100, 0b11101110 ];

    const expectedOutput = [ 0b00110011, 0b00001110, 0b00111000 ];

    expect(convertToSixBits(input)).toEqual(expectedOutput);
  });

  it('should convert a byte into two bytes', () => {
    const input = [ 0b11001100 ];

    const expectedOutput = [ 0b00110011, 0b00000000 ];

    expect(convertToSixBits(input)).toEqual(expectedOutput);
  });
});
