const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//mongoose.connect('mongodb://vishal1785:vish5678@ds137246.mlab.com:37246/test-db');

// declare axios for making http requests
//const axios = require('axios');
//const API = 'https://jsonplaceholder.typicode.com';

const mongoURI = 'mongodb://vishal1785:vish5678@ds137246.mlab.com:37246/test-db';
const options =  {
  server: {
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000, // reconnect after 1 second(s)
  }
};

mongoose.connect(mongoURI, options)
.then(function(){
  console.log('Connected to Mongoose successfully!');
}, function(err) {
  //err handle
  console.log('Unable to connect to the Mongoose server. Please start the server. Error:', err);
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('user api works');
});

module.exports = router;