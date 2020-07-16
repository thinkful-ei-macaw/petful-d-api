const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');
// const { people } = require('../../store');

const router = express.Router();

router.get('/', (req, res) => {
return res.json(People.get());
});

router.post('/', json, (req, res) => {

  if (!req.body.Name) {
    res.status(400, 'Name is required');
  } else {
    People.enqueue(req.body.Name);
    res.status(201).end();
  }
});


module.exports = router;
