// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const userRoutes = require('./routes/user');

const express = require('express');
const db = require('./../util/database');
const path = require('path');
const morgan = require('morgan');


const errorController = require('./../modules/controllers/error');
const adminRoutes = require('./../modules/routes/admin');
const studentRoutes = require('./../modules/routes/student');
const userRoutes = require('./../modules/routes/user');
const teacherRoutes = require('./../modules/routes/teacher');

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './modules/views');
app.set('view options', {
    layout: false
});

app.use(express.static(path.join(__dirname, './../public')));

app.use('/admin', adminRoutes);
app.use('/students', studentRoutes);
app.use(userRoutes);
app.use('/teachers', teacherRoutes);
app.use(errorController.get404);