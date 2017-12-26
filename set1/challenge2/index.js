const {
  getIntsFromHex
} = require('../challenge1');

function xor(input1, input2) {
  return input1 ^ input2;
}

function getHexStringFromInt(input) {
  return input.map(int => int.toString(16)).join('');
}

function xorHexStrings(input1, input2) {
  const intArr1 = getIntsFromHex(input1);
  const intArr2 = getIntsFromHex(input2);

  return intArr1
    .map((int1, i) => xor(int1, intArr2[i]))
    .map(int => int.toString(16))
    .join('');
}

module.exports = {
  xor,
  getHexStringFromInt,
  xorHexStrings,
};