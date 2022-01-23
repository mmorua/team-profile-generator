const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Marcus', 'email');

    expect(employee.name).toBe('Marcus');
    expect(employee.id).toEqual(Number);
    expect(employee.email).toBe('email');
    expect(employee.role).toBe(expect.arrayContaining(['Employee', 'Manager', 'Engineer', 'Intern']));
});