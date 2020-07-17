require('dotenv').config()
const express = require('express')
const cors = require('cors')

// const { NODE_ENV } = require('../../config')
const app = express()


// app.use(cors({
//   origin: CLIENT_ORIGIN
// }));

app.use(cors());

app.use('/people', require('../people/people.router'))
app.use('/pets/cat', require('../pets/cats.router'))
app.use('/pets/dog', require('../pets/dogs.router'))

// app.use((error, req, res, next) => {
//   let message
//   if (NODE_ENV === 'production') {
//     message = 'Server error'
//   }
//   else {
//     console.error(error)
//     message = error.message
//   }
//   res.status(500).json(message)
// })

module.exports = app;