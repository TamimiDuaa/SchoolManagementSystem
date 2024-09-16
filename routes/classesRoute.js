const express = require('express');
const router = express.Router();

const classesController = require('../controllers/classesController');

router.get('/',classesController.findAllClasses);
router.get('/search',classesController.findByName);
router.get('/:id',classesController.findClassById);

router.post('/',classesController.addNewClass);
router.put('/:id',classesController.updateClass);
router.delete('/:id',classesController.deleteClass)

module.exports = router;