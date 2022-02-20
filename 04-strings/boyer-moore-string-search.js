export const naiveSearch = (text, pattern) => {
  const patternLastIndex = pattern.length - 1

  let i = 0
  while (i < text.length) {
    for (let j = 0; j <= patternLastIndex; j++) {
      if (text.charAt(i + j) !== pattern.charAt(j)) {
        break
      }

      if (j === patternLastIndex) {
        return i
      }
    }

    i++
  }

  return -1
}

export const buildBadMatchTable = (str) => {
  const table = {}
  const lastIndex = str.length - 1

  for (let i = 0; i < lastIndex; i++) {
    table[str.charAt(i)] = lastIndex - i
  }

  if (table[str[lastIndex]] === undefined) {
    table[str[lastIndex]] = str.length
  }

  return table
}

export const boyerMooreSearch = (text, pattern) => {
  const badMatchTable = buildBadMatchTable(pattern)
  const patternLastIndex = pattern.length - 1

  let i = 0
  while (i < text.length) {
    for (let j = 0; j <= patternLastIndex; j++) {
      if (text.charAt(i + j) !== pattern.charAt(j)) {
        break
      }

      if (j === patternLastIndex) {
        return i
      }
    }

    i += badMatchTable[text[i + patternLastIndex]] ?? 1
  }

  return -1
}
