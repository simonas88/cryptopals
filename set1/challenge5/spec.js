const {
  XORencodeBytes,
  encode,
} = require('./index');

describe('Set1 specs', () => {
  describe('Challenge 5 specs', () => {
    it('Should apply repeating XOR on input', () => {
      const input = [ 0b01110001, 0b00110011, 0b00011110, 0b01101001 ];
      const cipher = [ 0b00010001, 0b00100100, 0b00000110 ];

      const expectedOutput = [ 0b01100000, 0b00010111, 0b00011000,0b01111000 ];

      expect(XORencodeBytes(input, cipher)).toEqual(expectedOutput);
    });

    it('Should produce XOR encoded hex string', () => {
      const input = 'Burning \'em, if you ain\'t quick and nimble\n'
        + 'I go crazy when I hear a cymbal';

      const cipher = 'ICE';

      const expectedOutput = '0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272'
        + 'a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f';

      expect(encode(input, cipher)).toEqual(expectedOutput);
    });
  });
});