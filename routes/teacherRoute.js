const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teacherController');

router.get('/',teacherController.findAllTeachers);
router.get('/search',teacherController.findByName);
router.get('/:id',teacherController.findTeacherById);

router.post('/',teacherController.addNewTeacher);
router.put('/:id',teacherController.updateTeacher);
router.delete('/:id',teacherController.deleteTeacher)

module.exports = router;