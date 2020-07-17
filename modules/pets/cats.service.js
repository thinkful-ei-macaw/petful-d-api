const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const cats = new Queue()
store.cats.forEach(cat => cats.enqueue(cat))

// --------------------

module.exports = {
  get() {
    // Return the pets to be adopted.
    return cats.showNext()
  },

  dequeue() {
    // Remove a pet from the queue.
    cats.dequeue()
    return cats.showNext()
  }
}
