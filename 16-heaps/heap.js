import {swap} from '../lib/index.js'

export class Heap {
  constructor() {
    this.items = []
  }

  parentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  leftChildIndex (index) {
    return index * 2 + 1
  }

  rightChildIndex (index) {
    return index * 2 + 2
  }

  parent (index) {
    return this.items[this.parentIndex(index)]
  }

  leftChild (index) {
    return this.items[this.leftChildIndex(index)]
  }

  rightChild (index) {
    return this.items[this.rightChildIndex(index)]
  }

  peek () {
    return this.items[0]
  }

  size () {
    return this.items.length
  }
}

export class MaxHeap extends Heap {
  bubbleDown () {
    let index = 0
    while (this.leftChild(index)) {
      const biggestIndex = (this.rightChild(index) > this.leftChild(index))
        ? this.rightChildIndex(index)
        : this.leftChildIndex(index)

      if (this.items[index] < this.items[biggestIndex]) {
        swap(this.items, index, biggestIndex)
        index = biggestIndex
      } else {
        return
      }
    }
  }

  bubbleUp () {
    let index = this.items.length - 1
    while (this.items[index] > this.parent(index)) {
      swap(this.items, index, this.parentIndex(index))
      index = this.parentIndex(index)
    }
  }

  push(key) {
    this.items.push(key)
    this.bubbleUp()
  }

  poll () {
    const maxValue = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.length--
    this.bubbleDown()

    return maxValue
  }
}
