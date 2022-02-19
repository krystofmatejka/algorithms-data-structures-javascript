import {BinarySearchTree} from './binary-search-tree.js';

describe(BinarySearchTree, () => {
  test('insert', () => {
    const bts = new BinarySearchTree()

    bts.insert(2, 'A')
    bts.insert(5, 'B')
    bts.insert(3, 'C')
    bts.insert(8, 'D')

    const root = bts.root

    expect(root.key).toBe(2)
    expect(root.left).toBeNull()
    expect(root.right.key).toBe(5)
    expect(root.right.left.key).toBe(3)
    expect(root.right.right.key).toBe(8)
  })

  test('find', () => {
    const bts = new BinarySearchTree()

    bts.insert(2, 'A')
    bts.insert(5, 'B')
    bts.insert(3, 'C')
    bts.insert(8, 'D')

    expect(bts.find(8).value).toBe('D')
    expect(bts.find(15)).toBeNull()
  })
})
