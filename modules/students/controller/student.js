const Student = require('./../services');

exports.getStudents = (req, res, next) => {
    Student.fetchStudents()
        .then(([rows, feildData]) => {
            res.render('listing/listing', {
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
            res.render('profile/student', {
                student: rows,
                pageTitle: 'Student',
                path: '/feildData'
            });
        })
        .catch(err => {
            console.log(err);
        });
}