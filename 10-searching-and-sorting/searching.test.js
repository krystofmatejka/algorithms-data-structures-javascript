import {linearSearch, binarySearch} from './searching.js'

describe(linearSearch.name, () => {
  test('found', () => expect(linearSearch([5, 9, 0, 113, 6], 0)).toBe(2))
  test('not found', () => expect(linearSearch([5, 9, 0, 113, 6], 90)).toBe(-1))
})

describe(binarySearch.name, () => {
  test('found in second half', () => expect(binarySearch([1, 3, 4, 7, 15, 17, 26, 30, 31, 35], 31)).toBe(8))
  test('found in first half', () => expect(binarySearch([1, 3, 4, 7, 15, 17, 26, 30, 31, 35], 3)).toBe(1))
  test('found at start', () => expect(binarySearch([1, 3, 4, 7, 15, 17, 26, 30, 31, 35], 1)).toBe(0))
  test('found at end', () => expect(binarySearch([1, 3, 4, 7, 15, 17, 26, 30, 31, 35], 35)).toBe(9))
  test('not found too big', () => expect(binarySearch([1, 3, 4, 7, 15, 17, 26, 30, 31, 35], 250)).toBe(-1))
  test('not found too small', () => expect(binarySearch([1, 3, 4, 7, 15, 17, 26, 30, 31, 35], -5)).toBe(-1))
})
