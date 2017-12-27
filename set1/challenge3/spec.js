const {
  deCipher,
} = require('./index');

describe('Set 1 specs', () => {
  describe('Challenge 3 specs', () => {
    it('should decipher cryptopals message', () => {
      const input = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

      const message = 'Cooking MC\'s like a pound of bacon';

      expect(deCipher(input).message).toEqual(message);
    });
  });
});
