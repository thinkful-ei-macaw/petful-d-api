const express = require('express')
const json = require('body-parser').json()

const Dog = require('./dogs.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const dog = Dog.get()
  return res.json(dog)
})

router.delete('/', (req, res) => {
  // Remove a pet from adoption.
  const dog = Dog.dequeue()
  return res.json(dog)
})

module.exports = router
