const {
  getHammingDistance,
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
  });
});