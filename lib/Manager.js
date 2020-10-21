// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Have access to Employee class in Employee.js
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, position = "Manager") { //role overridden
        super(name, id, email, position); // Inherit from Employee
        this.officeNumber = officeNumber; // Add Office Number
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;