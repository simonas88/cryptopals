function XORencodeBytes(input, cipher) {
  return input.map((char, index) => char ^ cipher[index % 3]);
}

function stringToIntArray(input) {
  const result = new Array(input.length);

  for (let i = 0; i < input.length; i++) {
    result[i] = input.charCodeAt(i);
  }

  return result;
}

function intReducer(agg, int) {
  const padding = int < 17 ? '0' : '';

  return agg + padding + int.toString(16);
}

function encode(input, cipher) {
  const encodedInts = XORencodeBytes(
    stringToIntArray(input),
    stringToIntArray(cipher),
  );

  return encodedInts.reduce(intReducer, '');
}

module.exports = {
  XORencodeBytes,
  encode,
};