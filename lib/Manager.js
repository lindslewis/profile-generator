// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquire = require('inquirer');
const Employee = require('./Employee');


class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email, 'manager')
        this.officeNumber = officeNumber
    }
}

module.exports=Manager