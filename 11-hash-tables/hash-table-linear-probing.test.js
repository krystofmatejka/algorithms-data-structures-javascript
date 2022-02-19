import {HashTableLinearProbing} from './hash-table-linear-probing.js'

describe.only(HashTableLinearProbing, () => {
  test('fill table without conflicts', () => {
    const hashTable = new HashTableLinearProbing(5)

    hashTable.set(0, 'AAA')
    hashTable.set(1, 'BBB')
    hashTable.set(2, 'CCC')
    hashTable.set(3, 'DDD')
    hashTable.set(4, 'EEE')

    expect(hashTable.keys).toEqual([0, 1, 2, 3, 4])
    expect(hashTable.values).toEqual(['AAA', 'BBB', 'CCC', 'DDD', 'EEE'])
  })

  test('resolve conflict', () => {
    const hashTable = new HashTableLinearProbing(5)

    hashTable.set(0, 'AAA')
    hashTable.set(3, 'BBB')
    hashTable.set(8, 'CCC')
    hashTable.set(13, 'DDD')

    expect(hashTable.keys).toEqual([0, 13, undefined, 3, 8])
    expect(hashTable.values).toEqual(['AAA', 'DDD', undefined, 'BBB', 'CCC'])
  })

  test('get element', () => {
    const hashTable = new HashTableLinearProbing(5)

    hashTable.set(2, 'AAA')
    expect(hashTable.get(2)).toBe('AAA')
  })

  test('throw on limit', () => {
    const hashTable = new HashTableLinearProbing(1)

    hashTable.set(0, 'AAA')
    expect(() => hashTable.set(1, 'BBB')).toThrow('out of space')
  })
})
