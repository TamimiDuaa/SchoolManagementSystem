const express = require('express');
const router = express.Router();

const gradesController = require('../controllers/gradesController');

router.get('/',gradesController.findAllGrades);


module.exports = router;