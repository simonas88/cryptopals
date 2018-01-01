const {
  readTextToArray,
  readStrings,
} = require('./index');

describe('Set 1 specs', () => {
  describe('Challenge 4 specs', () => {
    it('Should read the textfile into string array', async () => {
      const expectedOutput = '581e0829214202063d70030845e5301f5a5212ed0818e22f120b211b171b';

      const result = await readTextToArray('./set1/challenge4/input.txt');

      expect(result[6]).toEqual(expectedOutput);
    });

    it('Should find the encoded string and decipher it', async () => {
      const result = await readStrings('./set1/challenge4/input.txt');

      const expectedResult = 'Now that the party is jumping\n';

      expect(result.message).toEqual(expectedResult);
    });
  });
});