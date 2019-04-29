const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
// path

require('./models/User');
require('./strategy');

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true});
let app = express();

app.use(cookieSession({
  maxAge: 7 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authentication')(app);



const PORT = process.env.PORT || 5000;

app.listen(PORT);
