const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//mongoose.connect('mongodb://vishal1785:vish5678@ds137246.mlab.com:37246/test-db');

// declare axios for making http requests
//const axios = require('axios');
//const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('user api works');
});

module.exports = router;