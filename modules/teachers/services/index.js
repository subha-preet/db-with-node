const db = require('./../../../util/database');

module.exports = class teachers {

    static fetchTeachers() {
        return db.execute('SELECT * FROM `teachers`');
    }


};