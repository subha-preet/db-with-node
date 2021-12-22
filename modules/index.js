const path = require('path');
const express = require('express');

const usersController = require('./login-signup/controllers/users');

const router = express.Router();

router.get('/', usersController.getIndex);

module.exports = router;