// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Have access to Employee class in Employee.js
const Employee = require("./Employee");

// Add GitHub username, getGithub function, and override getRole
class Engineer extends Employee {
    constructor(name, id, email, github, position = "Engineer") { //role overridden
        super(name, id, email, position); // get these from parent
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;