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
    console.log("=======================", req.query)
    const prodId = req.query.student_id;
    Student.fetchAllStudentData(prodId)
        .then(([rows, feildData]) => {

            console.log(rows)

            res.render('dashboard/student', {
                studs: rows,
                pageTitle: 'Student',
                path: '/feildData'
            });
        })
        .catch(err => {
            console.log(err);
        });
}