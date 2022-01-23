// Using Employee constructor
const Employee = require('../lib/Employee.js');
test('creates an employee object', () => {
    const employee = new Employee('Marcus', 8, 'marcus.morua@gmail.com');
    console.log(employee);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName() method
test('gets employee name', () => {
    const employee = new Employee('Marcus', 8, 'marcus.morua@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


// getId() method
test('gets employee ID', () => {
    const employee = new Employee('Marcus', 8, 'marcus.morua@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// getEmail() method
test('gets employee email', () => {
    const employee = new Employee('Marcus', 8, 'marcus.morua@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// getRole() method
test('gets employee role', () => {
    const employee = new Employee('Marcus', 8, 'marcus.morua@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});