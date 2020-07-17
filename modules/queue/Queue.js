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

  enqueue(data) {
        //create a node with the data that you want to add to the queue
        const node = new _Node(data);

        //if the queue is empty, 
        //make the node the first node on the queue
        if (this.first === null) {
            this.first = node;
        }
        //if there is something on the queue already
        //then take the node that is currently at the end of the queue
        //and link it to the new node
        if (this.last) {
            node.prev = this.last;
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
  }

  dequeue() {
         //if the queue is empty, there is nothing to return
    if (this.first === null) {
          return;
      }
    //make the first item on the queue to be the 
    //the item that is next on the line 
    // the item after the current first item
    const node = this.first;
    this.first = node.next;
      //if this is the last item in the queue
    if (node === this.last) {
        this.last = null;
    }
    return node.value;
  }
  

  showNext() {
    // Return the next item in the queue.
    if (this.first === null) {
      return null; 
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    if (this.first === null) {
      return []; 
    }

    let node = this.first;
    let arr = []

    while (node.next !== null) { 
      arr.push(node.value);
      node = node.next; 
    }
    arr.push(node.value);
    return arr; 
  }
}

module.exports = Queue
