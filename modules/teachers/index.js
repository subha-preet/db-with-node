const path = require('path');
const express = require('express');

const teacherController = require('./controller/teacher');

const router = express.Router();

router.get('/', teacherController.getTeacher);


module.exports = router;