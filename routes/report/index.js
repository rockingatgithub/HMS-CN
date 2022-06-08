const express = require('express');
const { createReport } = require('../../controllers/report');
const router = express.Router();


router.get('/generate/:apId', createReport );



module.exports  = router;