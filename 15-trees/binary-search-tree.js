class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert (key, value) {
    const node = new Node(key, value)

    if (!this.root) {
      this.root = node
      return node
    }

    let currentNode = this.root
    while (true) {
      if (node.key < currentNode.key) {
        if (!currentNode.left) {
          currentNode.left = node
          return node
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = node
          return node
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }

  find (key) {
    let currentNode = this.root

    while (true) {
      if (!currentNode) {
        return null
      }

      if (currentNode.key === key) {
        return currentNode
      } else if (key < currentNode.key) {
        currentNode = currentNode.left
      } else if (key > currentNode.key) {
        currentNode = currentNode.right
      }
    }
  }
}
