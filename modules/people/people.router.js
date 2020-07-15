const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');
// const { people } = require('../../store');

const router = express.Router();

router.get('/', (req, res) => {
 
  const people=People.get();
  
  return res.status(200).json(people);
});

router.post('/', json, (req, res) => {

  People.enqueue(req.body.name);
  const people=People.get();

  res.status(201).json(people);
 

});
router.delete('/', (req,res)=>{
  console.log("dequeueing");
  People.dequeue();
  res.status(204).end();
})

module.exports = router;
