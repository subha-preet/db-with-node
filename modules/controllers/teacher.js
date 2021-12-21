const Teacher = require('../index');

exports.getTeacher = (req, res, next) => {
    Teacher.fetchTeachers()
        .then(([rows, feildData]) => {
            res.render('dashboard/listing', {
                studs: rows,
                pageTitle: 'Teachers',
                path: '/listing'
            });
        })
        .catch(err => {
            console.log(err);
        });
}