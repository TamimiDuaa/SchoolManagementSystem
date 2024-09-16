const express = require('express');
const router = express.Router();

const classesController = require('../controllers/classesController');

router.get('/',classesController.findAllClasses);


module.exports = router;