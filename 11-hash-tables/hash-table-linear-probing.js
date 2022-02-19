export class HashTableLinearProbing {
  constructor(size) {
    this.size = size
    this.keys = []
    this.values = []
    this.filled = 0
  }

  get (key) {
    let index = this.hash(key)
    while (this.keys[index] !== key) {
      index++
      index = index % this.size
    }

    return this.values[index]
  }

  set (key, value) {
    if (this.filled >= this.size) {
      throw new Error('out of space')
    }

    let index = this.hash(key)
    while (this.keys[index] != null) {
      index++
      index = index % this.size
    }

    this.keys[index] = key
    this.values[index] = value
    this.filled++
  }

  hash (key) {
    return key % this.size
  }
}
