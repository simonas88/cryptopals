const fs = require('fs');

const { deCipher } = require('../challenge3');

function readTextToArray(inputPath) {
  const readPromise = new Promise((resolve, reject) =>
    fs.readFile(inputPath, 'utf8', (err, data) => err ? reject(err) : resolve(data)));

  return readPromise.then(data => data.split('\n'));
}

async function readStrings(inputPath) {
  const array = await readTextToArray(inputPath);

  const result = array.reduce((agg, element) => {
    const deciphered = deCipher(element);

    if(deciphered.score > agg.score) {
      return deciphered;
    }

    return agg;
  }, { score: 0, message: '', cipher: 0 });

  return result;
}

module.exports = {
  readTextToArray,
  readStrings
};