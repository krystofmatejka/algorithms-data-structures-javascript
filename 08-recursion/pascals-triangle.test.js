import {pascalsTriangle, pascalsTriangleToString} from './pascals-triangle.js'

describe('pascals triangle', () => {
  test(pascalsTriangle.name, () => {
    expect(pascalsTriangle(6)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ])
  })

  test(pascalsTriangleToString.name, () => {
    expect(pascalsTriangleToString(pascalsTriangle(8))).toBe(
`
         1
        1  1
       1  2  1
      1  3  3  1
     1  4  6  4  1
    1  5 10 10  5  1
   1  6 15 20 15  6  1
  1  7 21 35 35 21  7  1
`
    )
  })
})
