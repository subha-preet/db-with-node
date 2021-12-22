const path = require('path');
const express = require('express');

const studentController = require('../controllers/student');

const router = express.Router();

router.get('/', studentController.getStudents);
router.get('/getValue', studentController.getParticularStudentData);

module.exports = router;