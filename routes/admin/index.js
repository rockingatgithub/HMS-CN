const express = require('express');
const { adminSignup, adminLogin, adminProfile } = require('../../controllers/admin');
const router = express.Router();

router.post('/login', adminLogin);
router.post('/signup', adminSignup);
router.get('/profile/:userId',  adminProfile);



module.exports = router;