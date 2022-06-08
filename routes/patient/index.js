const express = require('express');
const { patientLogin, patientSignup , patientProfile} = require('../../controllers/patient');
const router = express.Router();

router.post('/login', patientLogin);
router.post('/signup', patientSignup);
router.get('/profile/:userId',  patientProfile);


module.exports = router;