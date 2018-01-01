function getIntsFromHex(input) {
  const len = input.length;
  const array = new Array(len / 2);

  for (let i = 1, j = 0; i < len; i += 2, j += 1) {
    array[j] = (parseInt(input.substring(i - 1, i + 1), 16));
  }

  return array;
}

const B64_TABLE = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z', '0', '1', '2', '3',
  '4', '5', '6', '7', '8', '9', '+', '/',
];

function intsToB64String(input) {
  const inputLength = input.length;
  const pad = inputLength % 3;
  const fullThrees = inputLength - pad;

  let b64str = '';

  for (let i = 2; i < fullThrees; i += 3) {
    const b1 = input[i - 2];
    const b2 = input[i - 1];
    const b3 = input[i];

    const s1 = b1 >>> 2;
    const s2 = (b1 << (6 + 24) >>> (2 + 24)) | (b2 >>> 4);
    const s3 = (b2 << (4 + 24) >>> (2 + 24)) | (b3 >>> 6);
    const s4 = b3 << (2 + 24) >>> (2 + 24);

    b64str += B64_TABLE[s1] + B64_TABLE[s2] + B64_TABLE[s3] + B64_TABLE[s4];
  }

  if (pad === 2) {
    const b1 = input[inputLength - 2];
    const b2 = input[inputLength - 1];

    const s1 = b1 >>> 2;
    const s2 = (b1 << (6 + 24) >>> (2 + 24)) | (b2 >>> 4);
    const s3 = (b2 << (4 + 24) >>> (2 + 24));

    b64str += B64_TABLE[s1] + B64_TABLE[s2] + B64_TABLE[s3] + '=';
  }

  if (pad === 1) {
    const b1 = input[inputLength - 1];

    const s1 = b1 >>> 2;
    const s2 = (b1 << (6 + 24) >>> (2 + 24));

    b64str += B64_TABLE[s1] + B64_TABLE[s2] + '==';
  }

  return b64str;
}

function hexToB64(input) {
  const intArray = getIntsFromHex(input);
  return intsToB64String(intArray);
}

module.exports = {
  getIntsFromHex,
  intsToB64String,
  hexToB64,
};
