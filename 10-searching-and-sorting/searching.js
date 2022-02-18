export const linearSearch = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i
    }
  }

  return -1
}

export const binarySearch = (haystack, needle) => {
  let index = Math.round(haystack.length / 2)

  while (true) {
    const element = haystack[index]

    if (element === needle) {
      return index
    } else if (index === 0 || index === haystack.length - 1) {
      return -1
    } else if (element > needle) {
      index = index - Math.round(index / 2)
    } else if (element < needle) {
      index = index + Math.round((haystack.length - index) / 2)
    }
  }

  return -1
}
