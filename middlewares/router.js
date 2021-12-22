// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const userRoutes = require('./routes/user');

const express = require('express');
const db = require('./../util/database');
const path = require('path');
const morgan = require('morgan');


const errorController = require('../modules/error-controller');
const studentRoutes = require('./../modules/students');
const userRoutes = require('./../modules/login-signup');
const teacherRoutes = require('./../modules/teachers');
const dashboardRouter = require('./../modules');

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('view options', {
    layout: false
});

app.use(express.static(path.join(__dirname, './../public')));

app.use('/students', studentRoutes);
app.use(dashboardRouter);
app.use(userRoutes);
app.use('/teachers', teacherRoutes);
app.use(errorController.get404);