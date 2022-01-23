// Using Manager constructor
const Manager = require('../lib/Manager.js');
test('creates a manager object', () => {
    const manager = new Manager('Marcus', 8, 'marcus.morua@gmail.com', 1);
    console.log(manager);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() method
const manager = new Manager('Marcus', 8, 'marcus.morua@gmail.com', 1);

expect(manager.getRole()).toEqual('Manager');