const mongoose = require('mongoose');
const {Schema} = mongoose;
const currencySchema = require('./Currency');

const walletSchema = new Schema({
  currencies: [currencySchema]
});

module.exports = walletSchema;
