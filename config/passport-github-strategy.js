const passport = require('passport');
const Doctor = require('../models/doctor');
const githubStrategy = require('passport-github2').Strategy;


passport.use(new githubStrategy({
    clientID: 'e4723cb07fa603bba14e',
    clientSecret: '3339b3b40312af0853d844513f7070141773e561',
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  async function(accessToken, refreshToken, profile, done) {

    let doctor = await Doctor.findOne({ email: profile.emails[0].value });

    if(doctor) {
        done(null, doctor);
        return;
    }
    
    doctor = await  Doctor.create({  email: profile.emails[0].value, password: "1234"   })

    done(null, doctor);
  }
));



passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Doctor.findById(id, function (err, user) {
      done(err, user);
    });
  });


  module.exports = passport;