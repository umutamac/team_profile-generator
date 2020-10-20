// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, position = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.position;
    }
}
module.exports = Employee;