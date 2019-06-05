// business.route.js

const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let loan_part_0009b606f = require('../models/Business');

businessRoutes.route('/loans').get(function (req, res) {
    loan_part_0009b606f.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      alert(businesses);
      res.json(businesses);
    }
  });
});

module.exports = businessRoutes ;