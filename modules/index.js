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

    static fetchAll() {
        return db.execute('SELECT * FROM `students`');
    }

    static findById(id) {

    }
};