const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/',studentController.findAllStudent)


module.exports = router;