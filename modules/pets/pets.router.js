const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service');
// const people  = require('../people/people.service');
// const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req,res)=>{
  return res.status(200).json(Pets.get());
})



router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue(req.body.type);
  People.dequeue();
  res.status(204).end();
});
module.exports = router;
