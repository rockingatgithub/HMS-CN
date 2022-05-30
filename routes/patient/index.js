const express = require('express');
const { patientLogin, patientSignup } = require('../../controllers/patient');
const router = express.Router();

router.post('/login', patientLogin);
router.post('/signup', patientSignup);
router.get('/profile', (req, res) => { return res.send('This is admin route!') });



module.exports = router;