import {encodeId, decodeId} from './encode'

const TEST_CASE = [
  [0, 'a'],
  [1, 'b'],
  [100, 'Mb'],
  [11231230, '2UhV'],
]

test.each(TEST_CASE)('encode id', (n, id) => expect(encodeId(n)).toBe(id))
test.each(TEST_CASE)('decode id', (n, id) => expect(decodeId(id)).toBe(n))
