const express = require('express');
const { authenticate } = require('../config/authenticate');
const { logoutHandler } = require('../controllers/shared');
const router = express.Router();

router.get('/', (req, res) => res.render('index.ejs'));
router.use('/admin', require('./admin'));
router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));
router.use('/appoint', authenticate , require('./appoint'));
router.use('/report', require('./report'));
router.use('/v1', authenticate , require('./v1'));
router.get('/logout', logoutHandler)






module.exports = router;