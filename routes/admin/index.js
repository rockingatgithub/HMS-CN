const express = require('express');
const { adminSignup, adminLogin } = require('../../controllers/admin');
const router = express.Router();

router.post('/login', adminLogin);
router.post('/signup', adminSignup);
router.get('/profile', (req, res) => { return res.send('This is admin route!') });



module.exports = router;