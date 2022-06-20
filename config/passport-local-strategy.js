const passport = require('passport');
const Doctor = require('../models/doctor');
const LocalStrategy = require('passport-local').Strategy;

let passportCallback = async function( email, password, done){
    //find user and establish identity..
    try{
    let user = await Doctor.findOne({email: email})
        if(!user || user.password != password)
        {
            return done(null, false);
        }
        return done(null, user);
    }
    catch(err)
    {
        return done(err);
    }
}

passport.use(new LocalStrategy(

    {
        usernameField: 'email',
    }, 

    passportCallback

  ));


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Doctor.findById(id, function (err, user) {
      done(err, user);
    });
  });

//   passport.checkAuthentication = function(req, res, next){
//     //if signed in send to next..
//     if(req.isAuthenticated()){
//         return next();
//     }

//     //if the user is not signed in...
//     return res.redirect('/users/signin');
// }


  module.exports = passport;