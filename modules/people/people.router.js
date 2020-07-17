const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')
const router = express.Router()

router.get('/', (req, res) => {
  const people = People.get()
  return res.json(people)
})

router.post('/', json, (req, res) => {
  const { person } = req.body
  People.enqueue(person)
  return res.json(People.get())
})

router.delete('/', json, (req, res) => {
  const { person } = req.body
  People.dequeue(person)
  return res.json(People.get())
})

module.exports = router