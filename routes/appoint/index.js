const express = require('express');
const { bookAppointment, getAppointment, changeAppointment, appointmentPage } = require('../../controllers/appointment');
const router = express.Router();

router.post('/book', bookAppointment);
router.get('/fetch/:apId', getAppointment);
router.patch('/setStatus/:apId', changeAppointment);
router.get('/schedule/:userId',  appointmentPage )


module.exports = router;