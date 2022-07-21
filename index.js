const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')

// general employee questions
const start = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the new employee's name",
            name: 'name',   
        },
        {
            type: 'input',
            message: "What is this employee's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the employee's e-mail address?",
            name: 'email',
        },
    ])
} 