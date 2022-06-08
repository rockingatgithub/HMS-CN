const express = require('express');
const { doctorLogin, doctorSignup, doctorProfile } = require('../../controllers/doctor');
const router = express.Router();

router.post('/login', doctorLogin);
router.post('/signup', doctorSignup);
router.get('/profile/:userId',  doctorProfile );



module.exports = router;