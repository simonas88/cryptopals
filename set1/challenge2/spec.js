const {
  xor,
  getHexStringFromInt,
  xorHexStrings,
} = require('./index');

describe('Set 1 specs', () => {
  describe('Challenge 2 specs', () => {
    it('xors two ints', () => {
      const input1 = 0b11100110;
      const input2 = 0b01010101;
      const expected = 0b10110011;

      expect(xor(input1, input2)).toEqual(expected);
    });

    it('returns hex string', () => {
      const input = [ 0b11110001 ];
      const expected = 'f1';

      expect(getHexStringFromInt(input)).toEqual(expected);
    });

    it('it should pass cryptopals test', () => {
      const input1 = '1c0111001f010100061a024b53535009181c';
      const input2 = '686974207468652062756c6c277320657965';

      const expecte = '746865206b696420646f6e277420706c6179';

      expect(xorHexStrings(input1, input2)).toEqual(expecte);
    });
  });
});