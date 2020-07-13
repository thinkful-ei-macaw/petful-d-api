const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
// const People = require('../people/people.service')

const router = express.Router()

router.get('/dogs', (req, res) => {
  const dog=Pets.showDog();
  console.log(dog);
  return res.status(200).json(dog);
  // Return all pets currently up for adoption.
});
router.get('/cats', (req, res) => {
  const cat=Pets.showCat();
  return res.status(200).json(cat);
  // Return all pets currently up for adoption.
});

router.delete('/dogs', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.getDog('dog');
  return res.status(201).end();
})

router.delete('/cats', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.getCat('cat');
  return res.status(201).end();
})


module.exports = router;
