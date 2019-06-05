// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let loan_part_0009b606f = new Schema({
  member_id: {
    type: String
  },
  loan_amnt: {
    type: String
  },
  funded_amnt: {
    type: Number
  }
},{
    collection: 'loan_part_0009b606f'
});

module.exports = mongoose.model('loan_part_0009b606f', loan_part_0009b606f);