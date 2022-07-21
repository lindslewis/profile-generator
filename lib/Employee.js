// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName = () => {
        inquirer.prompt([
            {
             type: 'input',
             message: 'What is your name?',
             name: 'name',   
            }
        ]).then(ans => {
            console.log(ans)
        })
        
        
    }
    // getId(){

    // }
    // getEmail(){

    // }
    // getRole(){

    // }
}

module.exports = Employee