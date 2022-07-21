const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')


// starting prompt for the manager
const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'name',   
        },
        {
            type: 'input',
            message: "What is the manager's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the manager's e-mail address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'office',
        }
    ]).then((ans=> {
        start()
    }))
}

// prompt for selecting a role or finishing adding roles
const start = () => {
    inquirer.prompt ([
        {
            type: 'list',
            message: "Would you like to add another team member? What is their role?\nIf not, please select 'Finish'",
            choices: ['Engineer', 'Intern', 'Finish'],
            name: 'role',
        }
    ]).then(ans => {
         if(ans.role === 'Engineer') {
            console.log("You will now be adding the information for your Engineer.");
            engineerPrompt()
        } else if(ans.role === 'Intern') {
            console.log("You will now be adding the information for your Intern.");
            internPrompt();
        }else {
             console.log("All employees have been added!")
        }
    })
} 

// prompt for the engineer role
const engineerPrompt = () => {
    inquirer.prompt ([
        
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'name',   
        },
        {
            type: 'input',
            message: "What is the Engineer's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the Engineer's e-mail address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub username?",
            name: 'github',
        }
        
    ]).then ((ans=> {
        start()
    }))
 }
 
//  prompt for the intern role
 const internPrompt = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'name',   
        },
        {
            type: 'input',
            message: "What is the Intern's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the Intern's e-mail address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the Intern's school?",
            name: 'school',
        }
        
    ]).then ((ans=> {
        start()
    }))
 }

 managerPrompt()