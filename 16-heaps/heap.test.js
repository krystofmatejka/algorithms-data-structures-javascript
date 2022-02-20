import {MaxHeap} from './heap.js'

describe('MaxHeap', () => {
  test('push some values and verify they can be polled from max value', () => {
    const heap = new MaxHeap()

    heap.push(25)
    heap.push(5)
    heap.push(40)
    heap.push(1000)
    heap.push(70)

    expect(heap.poll()).toBe(1000)
    expect(heap.poll()).toBe(70)
    expect(heap.poll()).toBe(40)
    expect(heap.poll()).toBe(25)
    expect(heap.poll()).toBe(5)
  })
})
