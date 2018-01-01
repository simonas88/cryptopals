const {
  getIntsFromHex,
} = require('../challenge1');

function deCipher(input) {
  const ints = getIntsFromHex(input);

  const result = { score: 0, message: '', cipher: 0 };

  for(let i = 0b00000000; i <= 0b11111111; i += 0b00000001) {
    const message = ints.reduce((agg, int) => agg + String.fromCharCode(int ^ i), '');
    const score = scoreString(message);

    if (score > result.score) {
      result.score = score;
      result.message = message;
      result.cipher = i;
    }
  }

  return result;
}

function scoreString(input) {
  const scores = 'ZJQXKVBPGWYFMCULDHRSNIOATEzjqxkvbpgwyfmculdhrsnioate';

  return input.split('').reduce((agg, char) => {
    return agg + scores.indexOf(char);
  }, 0);
}

module.exports = {
  deCipher,
};