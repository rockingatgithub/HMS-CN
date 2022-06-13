const express = require('express');
const router = express.Router();

router.use('/appoint', require('./appoint'));


module.exports = router;