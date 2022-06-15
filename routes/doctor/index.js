const express = require('express');
const { authenticate } = require('../../config/authenticate');
const { doctorLogin, doctorSignup, doctorProfile } = require('../../controllers/doctor');
const router = express.Router();

router.post('/login', doctorLogin);
router.post('/signup', doctorSignup);
router.get('/profile/:userId', authenticate , doctorProfile );



module.exports = router;