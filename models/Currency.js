const mongoose = require('mongoose');
const {Schema} = mongoose;

const currencySchema = new Schema({
  id: String,
  amount: {type: Number, default: 0},
  lastBoughtAt: {type: Number, default: 0}
});

module.exports = currencySchema;
