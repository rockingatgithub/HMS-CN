const express = require('express');
const { changeAppointmentV1 } = require('../../../../controllers/appointment');
const router = express.Router();

router.patch('/setStatus/:apId', changeAppointmentV1);


module.exports = router;