// Import Employee constructor
const Employee = require('./Employee');

// Engineer constructor extends Employee constructor 
function Engineer(name, id, email, github) {

    // Calling Employee constructor
    Employee.call(this, name, id, email);
    this.github = github;
};

// getGithub() method
Engineer.prototype.getGithub = function() {
    return this.github;
};

// getRole() method
Engineer.prototype.getRole = function() {
    return 'Engineer';
};

// Export Engineer constructor
module.exports = Engineer;