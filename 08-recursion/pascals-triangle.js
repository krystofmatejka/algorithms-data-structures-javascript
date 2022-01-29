export const pascalsTriangle = (n) => {
  const triangle = [
    [1],
  ]

  for (let i = 1; i < n; i++) {
    const upperRow = triangle[i - 1]
    const currentRow = []
    triangle[i] = currentRow

    for (let j = 0; j <= i; j++) {
      const left = upperRow[j - 1] ?? 0
      const right = upperRow[j] ?? 0

      currentRow.push(left + right)
    }
  }

  return triangle
}

const lastElementOfArray = (array) => array[array.length - 1]

const getBiggestNumberFromTriangle = (triangle) => {
  const lastRow = lastElementOfArray(triangle)
  return lastRow[Math.floor(lastRow.length / 2)]
}

const numberOfDigits = (n) => Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1

export const pascalsTriangleToString = (triangle) => {
  let result = '\n'
  const biggestNumber = getBiggestNumberFromTriangle(triangle)
  const leftPadding = numberOfDigits(biggestNumber)

  for (let i = 0; i < triangle.length; i++) {
    const currentRow = triangle[i].map(n => String(n).padStart(leftPadding, ' ')).join(' ')
    const numberOfSpaces = triangle.length - i
    const padding = ' '.repeat(numberOfSpaces)
    result += padding + currentRow + '\n'
  }

  return result
}
