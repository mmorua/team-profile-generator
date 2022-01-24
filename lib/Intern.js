// Import Employee constructor
const Employee = require('./Employee');

// Intern constructor extends Employee constructor 
function Intern(name, id, email, school) {

    // Calling Employee constructor
    Employee.call(this, name, id, email);
    this.school = school;
};

// getSchool() method
Intern.prototype.getSchool = function() {
    return this.school;
};

// getRole() method
Intern.prototype.getRole = function() {
    return 'Intern';
};

    // Export Intern constructor
module.exports = Intern;