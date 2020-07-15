const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service');
// const people  = require('../people/people.service');
// const People = require('../people/people.service')

const router = express.Router()

router.get('/dogs', (req, res) => {
  let dog=Pets.getDog();
  console.log(dog);
  return res.status(200).json(dog);
  // Return all pets currently up for adoption.
});
router.get('/cats', (req, res) => {
  let cat=Pets.getCat();
  return res.status(200).json(cat);
  // Return all pets currently up for adoption.
});

router.delete('/dogs', json, (req, res) => {
  if(req.body.type==='dog'){
    Pets.dequeue('dog');
    // people.dequeue();
  }
  else{
    Pets.dequeue(req.body.type);
    // people.dequeue();
  }
  
  return res.status(204).send();
});

router.delete('/cats', json, (req, res) => {
  if(req.body.type==='cat'){
    Pets.dequeue('cat');
    // people.dequeue();
  }
  else{
    Pets.dequeue(req.body.type);
    // people.dequeue();
  }
  
  return res.status(204).send();
})


module.exports = router;
