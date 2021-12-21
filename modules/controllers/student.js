const Student = require('../index');

exports.getStudents = (req, res, next) => {
    Student.fetchStudents()
        .then(([rows, feildData]) => {
            res.render('dashboard/listing', {
                studs: rows,
                pageTitle: 'Students',
                path: '/listing'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getParticularStudentData = (req, res, next) => {
    Student.fetchAllStudentsData()
        .then(([rows, feildData]) => {
            res.render('dashboard/listing', {
                studs: rows,
                pageTitle: 'Students',
                path: '/listing'
            });
        })
        .catch(err => {
            console.log(err);
        });
}