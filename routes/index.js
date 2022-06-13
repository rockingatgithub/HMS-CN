const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index.ejs'));
router.use('/admin', require('./admin'));
router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));
router.use('/appoint', require('./appoint'));
router.use('/report', require('./report'));
router.use('/v1', require('./v1'));






module.exports = router;