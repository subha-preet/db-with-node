const db = require('./../util/database');

module.exports = class students {
    constructor(student_id, first_name, last_name, email, phone, gender, dob, address, state, country, pincode) {
        this.student_id = student_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.dob = dob;
        this.address = address;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
    }

    save() {

    }

    static deleteById(id) {

    }

    static fetchAllStudentsData(rdata, student_id) {
        return db.execute('SELECT ' + rdata + ' FROM `students` JOIN student_courses on students.student_id = student_courses.student_id JOIN courses on student_courses.course_id = courses.course_id JOIN student_department on student_department.student_id = students.student_id JOIN department on department.department_id = student_department.department_id JOIN student_sport ON student_sport.student_id = students.student_id JOIN sports ON student_sport.sport_id = student_sport.sport_id WHERE students.student_id = ' + student_id);
    }
    static fetchStudents() {
        return db.execute('SELECT * FROM `students`');
    }
    static fetchTeachers() {
        return db.execute('SELECT * FROM `teachers`');
    }

    static findById(id) {

    }
};