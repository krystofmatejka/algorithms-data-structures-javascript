import {naiveSearch, buildBadMatchTable, boyerMooreSearch} from './boyer-moore-string-search.js'

describe(naiveSearch.name, () => {
  test('this is test', () => expect(naiveSearch('this is test', 'test')).toEqual(8))
  test('this is test', () => expect(naiveSearch('this is test', 'jam')).toEqual(-1))
  test('lorem ipsum', () => expect(naiveSearch('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s', 'standard dummy')).toBe(109))
})

describe(buildBadMatchTable.name, () => {
  test('test', () => expect(buildBadMatchTable('test')).toEqual({
    'e': 2,
    's': 1,
    't': 3,
  }))

  test('data', () => expect(buildBadMatchTable('data')).toEqual({
    'd': 3,
    'a': 2,
    't': 1,
  }))

  test('jam', () => expect(buildBadMatchTable('jam')).toEqual({
    'j': 2,
    'a': 1,
    'm': 3,
  }))

  test('struct', () => expect(buildBadMatchTable('struct')).toEqual({
    's': 5,
    't': 4,
    'r': 3,
    'u': 2,
    'c': 1,
  }))
})

describe(boyerMooreSearch.name, () => {
  test('this is test', () => expect(boyerMooreSearch('this is test', 'test')).toBe(8))
  test('lorem ipsum', () => expect(boyerMooreSearch('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s', 'standard dummy')).toBe(109))
})
