const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));
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
  getCat(){
    let cat=pets.cats.show();
    let adopted=[cat?{cat}:null];
    return adopted;
  },
  getDog(){
    let dog=pets.dogs.show();
    let adopted=[dog?{dog}:null];
    return adopted;

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
      if(!pets.cats.all()){
        popCats();
      }
    }
    if (type === 'dog') {
      pets.dogs.dequeue();
      if(!pets.dogs.all()){
        popDogs();
      }
    }
  }
}