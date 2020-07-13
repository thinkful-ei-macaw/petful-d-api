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
    if(!pets.cats.show()){
      store.cats.forEach(cat => pets.cats.enqueue(cat))

    }
    // Return the pets next in line to be adopted.
    return pets.cats.dequeue();
  },
  getDog() {
    if(!pets.dogs.show()){
      store.dogs.forEach(dog => pets.dogs.enqueue(dog))

    }
    // Return the pets next in line to be adopted.
    return pets.dogs.dequeue();
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