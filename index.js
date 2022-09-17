const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const { default: Choices } = require("inquirer/lib/objects/choices");
const Employee = [];


const questions = async () => {
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the email?",
            name: "email",
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])

    if (answers.role === "Manager") {
        const managerAnswer = await inquirer.prompt([{
            type: "input",
            message: "What is your office number",
            name: "officeNumber",
        },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswer.officeNumber
        );
        Employee.push(newManager);

    } else if (answers.role === "Engineer") {
        const engineerAnswer = await inquirer.prompt([{
            type: "input",
            message: "what is your Github username?",
            name: "github",
        },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            engineerAnswer.github
        );
        Employee.push(newEngineer);


    } else {
        const internAnswer = await inquirer.prompt([{
            type: "input",
            message: "what is your school?",
            name: "school",
        },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnswer.school
        );
        Employee.push(newIntern);
    }
};

async function promptQuestions() {
    await questions();

    const addEmployeeAnswer = await inquirer.prompt([{
        type: "list",
        message: "Would you like to add an employee?",
        choices: ["Add a new employee", "Done adding employees"],
        name: "addEmployee"
    }]);

    if (addEmployeeAnswer.addEmployee === "Add a new employee") {
        return promptQuestions()
    } else {
        // we need to use the Employee array and pass it into the
        // generateTeam function which we imported up top
        var returnedHTML = generateTeam(Employee);
        fs.writeFile("./dist/index.html", returnedHTML);
        // console.log('Your team is finished.');
        // console.log('The Employee array looks like', Employee);
    }

}

promptQuestions();


// console.log("Complete! Your file is in the dist folder")