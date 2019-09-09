const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
// path;
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

if(process.env.NODE_ENV === 'production'){
  // Fetches production assets (js/css)
  app.use(express.static('mimicoin/build'));

  const path = require('path');
  // 'Returns index file if route not recoginze'
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'mimicoin', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
