const express = require('express')
const json = require('body-parser').json()

const Cat = require('./cats.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const cat = Cat.get()
  return res.json(cat)
})

router.delete('/', (req, res) => {
  // Remove a pet from adoption.
  const cat = Cat.dequeue()
  return res.json(cat)
})

module.exports = router
