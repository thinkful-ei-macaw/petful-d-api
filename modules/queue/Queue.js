class _Node {
  constructor(value){
    this.value=value;
    this.next=null;
  }
}


class Queue {
  constructor() {
    // Set initial data.
    this.first=null;
    this.last=null;
  }


  enqueue(value) {
    // Add some data to the queue.
    if(this.first === null)
      this.first = new _Node(value);
    else{
      let n = this.first;
      while(n.next){
        n = n.next;
      }
      n.next = new _Node(value);
      this.length++;
    }

  }

  dequeue() {
    // Remove some data from the queue.
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = node.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  

  show() {
    // Return the next item in the queue.
    if (this.first !== null) return this.first.value;
    return -1;
  }

  all() {
    // Return all items in the queue.
    if (this.first === null) return null;
    let current = this.first;
    let result = [current.value];
    while (current.next !== null) {
      current = current.next;
      result.push(current.value);
    }
    return result;
  }

//   getArray(){
//     let current = this.first;
//     let arr=[];
//     while(current.next !== null){
//       current=current.next
//     }
//     return arr;
//   }
}

module.exports = Queue;


