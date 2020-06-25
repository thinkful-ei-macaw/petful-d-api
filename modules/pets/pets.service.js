const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  getCat() {
    // Return the pets next in line to be adopted.
    return pets.cats.dequeue();
  },
  getDog() {
    // Return the pets next in line to be adopted.
    return pets.dogs.dequeue();
  },
  getDogArray(){
    return pets.dogs.all()
  },
  getCatArray(){
    return pets.cats.all()
  },
  dequeue(type) {

    // Remove a pet from the queue.
    if (type === 'cat') {
      pets.cats.dequeue();
    }
    if (type === 'dog') {
      pets.dogs.dequeue();
    }
  }
}