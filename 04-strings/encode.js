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

export const isPalindrome = (word) => {
  if (word.length <= 2) {
    return true
  }

  const halfOfLength =  Math.floor(word.length / 2)
  for (let i = 0; i < halfOfLength; i++) {
    const startLetter = word.charAt(i)
    const endLetter = word.charAt(word.length - 1 - i)

    if (startLetter !== endLetter) {
      return false
    }
  }

  return true
}
