const express = require('express');
const passport = require('passport');
const { doctorLogin, doctorSignup, doctorProfile } = require('../../controllers/doctor');
const router = express.Router();

router.post('/login', passport.authenticate('local', { failureRedirect: '/' })  ,doctorLogin);
router.post('/signup', doctorSignup);
router.get('/profile/:userId' , doctorProfile );



module.exports = router;