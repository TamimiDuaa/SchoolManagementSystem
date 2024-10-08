const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/',studentController.findAllStudent);
router.get('/form',studentController.renderForm);
router.get('/search',studentController.findByStudentName);
router.get('/:id',studentController.findStudentById);

router.post('/form',studentController.addNewStudent);
router.put('/:id',studentController.updateStudent);
router.delete('/delete/:id',studentController.deleteStudent)


module.exports = router;