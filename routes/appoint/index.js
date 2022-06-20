const express = require('express');
const passport = require('passport');
const { bookAppointment, getAppointment, changeAppointment, appointmentPage } = require('../../controllers/appointment');
const router = express.Router();

router.post('/book', bookAppointment);
router.get('/fetch/:apId', getAppointment);
router.patch('/setStatus/:apId',  passport.authenticate('local', {failureRedirect: '/'})  , changeAppointment);
router.get('/schedule/:userId',  appointmentPage )


module.exports = router;