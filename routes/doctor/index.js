const express = require('express');
const { doctorLogin, doctorSignup } = require('../../controllers/doctor');
const router = express.Router();

router.post('/login', doctorLogin);
router.post('/signup', doctorSignup);
router.get('/profile', (req, res) => { return res.send('This is admin route!') });



module.exports = router;