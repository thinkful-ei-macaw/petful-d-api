const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};


// store.cats.forEach(cat => pets.cats.enqueue(cat))
function popCats(){
  for(let i=0;i<store.cats.length;i++){
    let cat=store.cats[i];
    pets.cats.enqueue(cat);
  }}
popCats();
function popDogs(){
  for(let i=0;i<store.dogs.length;i++){
    let dog=store.dogs[i];
    pets.dogs.enqueue(dog);
  }}
popDogs();
// store.dogs.forEach(dog => pets.dogs.enqueue(dog))


// --------------------

module.exports = {
  getCat() {
    let cat=pets.cats.dequeue();
    if(!pets.cats.show()){
      popCats();

    }
    // Return the pets next in line to be adopted.
    return cat
  },
  getDog() {
    let dog=pets.dogs.dequeue()
    if(!pets.dogs.show()){
      popDogs();

    }
    // Return the pets next in line to be adopted.
    return dog;
  },
  showCat(){
    return pets.cats.show()
  },
  showDog(){
    return pets.dogs.show()
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