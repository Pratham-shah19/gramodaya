const express = require('express');
const router = express.Router()

const {getReport,createReport} = require('../controllers/mandi')

router.route('/reports').get(getReport).post(createReport);
module.exports = router;
