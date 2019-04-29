const mongoose = require('mongoose');
const {Schema} = mongoose;
const walletSchema = require('./Wallet');

const userSchema = new Schema({
  googleID: String,
  wallet: walletSchema,
  watchlist: [String],
  firstTimer: {type: Boolean, default: true}
});

mongoose.model('users', userSchema);
