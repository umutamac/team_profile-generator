// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Have access to Employee class in Employee.js
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, position = "Intern") { //role overridden
        super(name, id, email, position); // get from Employee
        this.school = school; // Add School
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;