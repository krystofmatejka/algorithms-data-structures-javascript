const DICTIONARY = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
const BASE = DICTIONARY.length;

export function encodeId(num) {
  let encoded = ''

  if (num < 1) {
    return DICTIONARY[0]
  }

  while (num > 0) {
    encoded += DICTIONARY[(num % BASE)]
    num = Math.floor(num / BASE)
  }

  return encoded
}

export function decodeId(id) {
  let decoded = 0

  for (let i = id.length - 1; i >= 0; i--) {
    decoded = DICTIONARY.indexOf(id[i]) + (decoded * BASE)
  }

  return decoded
}
