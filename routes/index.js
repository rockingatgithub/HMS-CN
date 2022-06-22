const express = require('express');
const passport = require('passport');
const { githubAuth } = require('../controllers/shared');
const router = express.Router();

router.get('/', (req, res) => res.render('index.ejs'));
router.use('/admin', require('./admin'));
router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));
router.use('/appoint', require('./appoint'));
router.use('/report', require('./report'));
router.use('/v1', require('./v1'));

router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));
 
router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }), githubAuth);






module.exports = router;