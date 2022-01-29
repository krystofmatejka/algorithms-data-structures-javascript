import {getFibNumIter, getFibSeqIter, getFibNumRecursive, getFibNumRecursiveOptimal} from './fibonacci.js'

const TEST_CASE = [
  [1, 1],
  [3, 2],
  [6, 8],
  [8, 21],
]

describe('fibonacci', () => {
  test.each(TEST_CASE)(getFibNumIter.name, (n, e) => {
    expect(getFibNumIter(n)).toBe(e)
  })

  test(getFibSeqIter.name, () => {
    expect(getFibSeqIter(1)).toEqual([1])
    expect(getFibSeqIter(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21])
  })

  test.each(TEST_CASE)(getFibNumRecursive.name, (n, e) => {
    expect(getFibNumRecursive(n)).toBe(e)
  })

  test.each(TEST_CASE)(getFibNumRecursiveOptimal.name, (n, e) => {
    expect(getFibNumRecursiveOptimal(n)).toBe(e)
  })
})
