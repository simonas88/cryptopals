function getIntsFromHex(input) {
  const array = [];

  for (let i = 1; i <= input.length; i += 2) {
    array.push(parseInt(input.substring(i - 1, i + 1), 16));
  }

  return array;
}

module.exports = {
  getIntsFromHex
}