const express = require('express');
const { bookAppointment, getAppointment, changeAppointment } = require('../../controllers/appointment');
const router = express.Router();

router.post('/book', bookAppointment);
router.get('/fetch/:apId', getAppointment);
router.patch('/setStatus/:apId', changeAppointment)


module.exports = router;