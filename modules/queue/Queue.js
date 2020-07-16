class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) return;
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    let node = this.first;
    let arr = [];
    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

module.exports = Queue;