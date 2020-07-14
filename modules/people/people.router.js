const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
 
  const people=People.get();
  
  return res.status(200).json(people||null);
});

router.post('/', json, (req, res) => {

  People.enqueue(req.body.person);
  res.status(201).send();
 

});

module.exports = router;
