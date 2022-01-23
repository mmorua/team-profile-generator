function Employee(name = '', email = '') {
    this.name = name;
    this.id = 1;
    this.email = email;
    this.role = [];
};

module.exports = Employee;