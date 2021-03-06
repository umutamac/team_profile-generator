const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const empType = {
    type: 'list',
    message: "Type of employee:",
    name: "position",
    choices: ["Manager","Engineer","Intern"]
}
const commonInfo = [{
        type: "input",
        message: "Employee name:",
        name: "employeeName"
    }, {
        type: "input",
        message: "Employee ID:",
        name: "employeeID"
    }, {
        type: "input",
        message: "Employee email:",
        name: "employeeEmail"
    }]

const employees = [];
let newEmployee;
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function createEmployeeProfile() {
    try{
        const commonInformation = await inquirer.prompt(commonInfo);
        const employeeType = await inquirer.prompt(empType);

        if (employeeType.position == "Manager") { // if manager -> ask for office number
            let specialInqury = await inquirer.prompt([{
                type: "input",
                name: "office",
                message: "Office Number:"
            }])
            newEmployee = new Manager(commonInformation.empName, commonInformation.empID, commonInformation.empEmail, specialInqury.office);
            employees.push(newEmployee);  
        }
        else if (employeeType.position == "Engineer") { // if engineer -> ask for github
            let specialInqury = await inquirer.prompt([{
                type: "input",
                name: "gitHub",
                message: "GitHub username:"
            }])
            newEmployee = new Engineer(commonInformation.empName, commonInformation.empID, commonInformation.empEmail, specialInqury.gitHub);
            employees.push(newEmployee);  
        }
        else { // only other option is intern -> ask for school
            let specialInqury = await inquirer.prompt([{
                type: "input",
                name: "school",
                message: "Intern's school:"
            }])
            newEmployee = new Intern(commonInformation.empName, commonInformation.empID, commonInformation.empEmail, specialInqury.school);
            employees.push(newEmployee);
        }

        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!
        fs.writeFileSync(outputPath, render(employees));
    } catch(err) {
        console.log(err);
    }
}
createEmployeeProfile();




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
