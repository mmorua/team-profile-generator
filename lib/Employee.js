// Employee constructor
function Employee(name, id, email) {
    
    this.name = name;
    this.id = id;
    this.email = email;
};

// getName() method
Employee.prototype.getName = function() {
    return this.name;
};

// getId() method
Employee.prototype.getId = function() {
    return this.id;
};

// getEmail() method
Employee.prototype.getEmail = function() {
    return this.email;
};

// getRole() method
Employee.prototype.getRole = function() {
    return 'Employee';
};





// Export Employee constructor
module.exports = Employee;

