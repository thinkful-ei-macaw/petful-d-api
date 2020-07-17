const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const dogs = new Queue()
store.dogs.forEach(dog => dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the next pets in line to be adopted.
    return dogs.showNext()
  },

  dequeue() {
    // Remove a pet from the queue.
    dogs.dequeue()
    return dogs.showNext()
  }
}
