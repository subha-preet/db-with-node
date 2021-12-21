const path = require('path');
const express = require('express');

const studentController = require('../controllers/student');

const router = express.Router();

router.get('/', studentController.getStudents);
router.post('/: student_id', studentController.getParticularStudentData);

module.exports = router;