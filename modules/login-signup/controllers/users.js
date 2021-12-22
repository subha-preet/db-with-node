exports.getUser = (req, res, next) => {
    res.render('dashboard/login', {
        pageTitle: 'login',
        path: '/login'
    });
};

exports.addNewUser = (req, res, next) => {
    res.render('dashboard/signup', {
        pageTitle: 'signup',
        path: '/signup'
    });
};

exports.getIndex = (req, res, next) => {
    res.render('dashboard/index', {
        pageTitle: 'Dashboard',
        path: '/'
    });
};