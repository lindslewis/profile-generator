// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquire = require('inquirer');
const Employee = require('./Employee');



class Engineer extends Employee {
    constructor(github) {
        super(name, id, email, 'engineer')
        this.github = github
    }
    getGithub(){
        return this.github
    }
}

module.exports=Engineer