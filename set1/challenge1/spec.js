const {
  getIntsFromHex,
  intsToB64String,
  hexToB64,
} = require('./index');

describe('Set 1 specs', () => {
  it('should read hex string into integers', () => {
    const input = '4F62';

    const expectedOutput = [ 0b01001111, 0b01100010 ];

    expect(getIntsFromHex(input)).toEqual(expectedOutput);
  });

  it('should convert three bytes into four bytes', () => {
    const input = [ 0b11001100, 0b11101110, 0b01110111 ];

    const expectedOutput = 'zO53';

    expect(intsToB64String(input)).toEqual(expectedOutput);
  });

  it('should convert two bytes into three bytes', () => {
    const input = [ 0b11001100, 0b11101110 ];

    const expectedOutput = 'zO4=';

    expect(intsToB64String(input)).toEqual(expectedOutput);
  });

  it('should convert a byte into two bytes', () => {
    const input = [ 0b11001100 ];

    const expectedOutput = 'zA==';

    expect(intsToB64String(input)).toEqual(expectedOutput);
  });

  it('should pass cryptopals test', () => {
    const input = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const expectedOutput = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';

    expect(hexToB64(input)).toEqual(expectedOutput);
  });
});
