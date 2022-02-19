import {bubbleSort} from './sorting.js'

describe(bubbleSort.name, () => {
  test.only('sort', () => expect(bubbleSort([6, 1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 6]))
})
