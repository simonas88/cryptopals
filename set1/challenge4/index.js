const fs = require('fs');

function readTextToArray(inputPath) {
  const readPromise = new Promise((resolve, reject) =>
    fs.readFile(inputPath, 'utf8', (err, data) => err ? reject(err) : resolve(data)));

  return readPromise.then(data => data.split('\n'));
}

module.exports = {
  readTextToArray,
};