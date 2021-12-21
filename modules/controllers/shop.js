const Student = require('./../index');

exports.getIndex = (req, res, next) => {
    Student.fetchAll()
        .then(([rows, feildData]) => {
            res.render('shop/index', {
                studs: rows,
                pageTitle: 'Shop',
                path: '/'
            });
        })
        .catch(err => {
            console.log(err);
        });

};