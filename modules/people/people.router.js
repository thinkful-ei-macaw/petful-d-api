const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
 
  // Return all the people currently in the queue.
  const people=People.get();
  
  return res.status(200).json(people);
});

router.post('/', json, (req, res) => {
 
  // Add a new person to the queue.
  const {name}=req.body;
  console.log(name, "1");
  
  People.enqueue(name);
  console.log(name);
  return res.status(201).end();
});

module.exports = router;
