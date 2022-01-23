const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Marcus', 'email');
    console.log(employee);
    expect(employee.name).toBe('Marcus');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('email');
    expect(employee.role).toBe(expect.arrayContaining(['Employee', 'Manager', 'Engineer', 'Intern']));
});