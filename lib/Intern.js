// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquire = require('inquirer');

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super(name, id, email, 'intern')
        this.school = school
    }
    getSchool(){
        return this.school
    }
}


module.exports=Intern