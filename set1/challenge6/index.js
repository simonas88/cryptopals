const { stringToIntArray } = require('../challenge5');

function getHammingDistance(input1, input2) {
  if (input1.length !== input2.length) {
    throw Error('unequal length inputs');
  }

  const ints1 = stringToIntArray(input1);
  const ints2 = stringToIntArray(input2);

  return ints1.reduce((distance, int, index) => {
    const diff = (int ^ ints2[index]).toString(2).replace(/0/g, '');

    return distance + diff.length;
  }, 0);
}

module.exports = {
  getHammingDistance,
};