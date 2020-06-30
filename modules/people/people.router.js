const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
 
  // Return all the people currently in the queue.
  const people=People.get();
  
  return res.status(200).json(people);
});

router.use(json)

router.post('/',(req, res) => {
 
  // Add a new person to the queue.
  const {name}=req.body;
  console.log(name);
  People.enqueue(name);
  console.log(name);
  return res.status(201).end;
});

module.exports = router;
