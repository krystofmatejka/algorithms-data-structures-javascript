import {encodeId, decodeId, isPalindrome} from './encode'

const TEST_CASE = [
  [0, 'a'],
  [1, 'b'],
  [100, 'Mb'],
  [11231230, '2UhV'],
]

describe('encode', () => {
  test.each(TEST_CASE)('encode id', (n, id) => expect(encodeId(n)).toBe(id))
  test.each(TEST_CASE)('decode id', (n, id) => expect(decodeId(id)).toBe(n))

  test(isPalindrome.name, () => {
    expect(isPalindrome('hi')).toBe(true)
    expect(isPalindrome('eye')).toBe(true)
    expect(isPalindrome('testset')).toBe(true)
    expect(isPalindrome('aibohphobia')).toBe(true)
    expect(isPalindrome('tea')).toBe(false)
    expect(isPalindrome('unpredictable')).toBe(false)
  })
})
