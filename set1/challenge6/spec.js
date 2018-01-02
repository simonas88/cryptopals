const {
  getHammingDistance,
  getIntsFromB64,
} = require('./index');

describe('Set1 specs', () => {
  describe('Challenge 6 specs', () => {
    it('Should return the hamming distance between two strings', () => {
      const input1 = 'this is a test';
      const input2 = 'wokka wokka!!!';

      const expectedResult = 37;

      expect(getHammingDistance(input1, input2)).toEqual(expectedResult);
    });

    it('Should throw an error, because input strings differ in length', () => {
      expect(() => getHammingDistance('foo', 'fo')).toThrow('unequal length inputs');
    });

    it('Should return int array given BASE64 string', () => {
      const input = 'zO53';

      const expectedOutput = [ 0b11001100, 0b11101110, 0b01110111 ];

      expect(getIntsFromB64(input)).toEqual(expectedOutput);
    });

    it('Should return int array given BASE64 string', () => {
      const input = 'zO4=';

      const expectedOutput = [ 0b11001100, 0b11101110 ];

      expect(getIntsFromB64(input)).toEqual(expectedOutput);
    });

    it('Should return int array given BASE64 string', () => {
      const input = 'zA==';

      const expectedOutput = [ 0b11001100 ];

      expect(getIntsFromB64(input)).toEqual(expectedOutput);
    });
  });
});