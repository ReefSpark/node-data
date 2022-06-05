const express = require('express');
const router = express.Router()
const competition = require('./competition')

router.use(express.static('dist'));

router.use('/competition',competition)

module.exports = router;