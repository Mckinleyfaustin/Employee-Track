const inquirer =require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { default: Choices } = require("inquirer/lib/objects/choices");
const Employee = [];


const questions = async () => {
    const answers = await inquirer.prompt([
        {
            type: "input",
            Message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            Message: "What is the ID number?",
            name: "id",
        },
        {
            type: "input",
            Message: "What is the email?",
            name: "email",
        },
        {
            type: "list",
            Message: "What is the employee's role?",
            Choices: ["Engineer", "Intern", "Manager"],
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
        answer.name,
        answer.id,
        answer.email,
        managerAnswer.officeNumber
    );
    Employee.push(newManager);

    } else if (answer.role === "Engineer") {
        const engineerAnswer = await inquirer.prompt([{
            type: "input",
            message: "what is your Github username?",
            name: "github",
        },
    ])
    const newEngineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        engineerAnswer.github
    );
    Employee.push(newEngineer);


    } else if (answer.role === "Intern") {
        const internAnswer = await inquirer.prompt([{
            type: "input",
            message: "what is your school?",
            name: "school",
        },
    ])
    const newIntern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        internAnswer.school
    );
    Employee.push(newIntern);
    }
};

async function promptQuestions(){
    await questions()


const addEmployeeAnswer = await inquirer.prompt([{
    type: "list",
    message: "Would you like to add an employee?",
    choices: ["Add a new employee", "Done adding employees"],
    name: "addEmployee"
}]);

if (addEmployeeAnswer.addEmployee === "Add a new employee") {
    return promptQuestions()
}

}

promptQuestions();

fs.writeFile("./dist/index.html",)
console.log("Complete! Your file is in the dist folder")