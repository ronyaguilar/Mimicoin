const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(null, user));
});

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  console.log("passed oauth");

  const user = await User.findOne({googleID: profile.id});

  if(user)
    return done(null, user);

  const newUser = await new User({
    googleID : profile.id,
    wallet: ({currencies: [{id: 'USD', amount: '1000'}]})
  }).save();

  return done(null, newUser);
}));
