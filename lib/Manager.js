// Import Employee constructor
const Employee = require('./Employee.js');

// Manager constructor extends Employee constructor
function Manager(name, id, email, officeNumber) {

    // Calling Employee constructor
    Employee.call(this, name, id, email)
    this.officeNumber = officeNumber;
};

// getRole() method
Manager.prototype.getRole = function() {
    return 'Manager';
};

// Export Manager constructor
module.exports = Manager;