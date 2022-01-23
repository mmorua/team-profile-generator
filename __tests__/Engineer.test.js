// Using Engineer constructor
const Engineer = require('../lib/Engineer.js');
test('creates an engineer object', () => {
    const engineer = new Engineer('Marcus', 8, 'marcus.morua@gmail.com', 'mmorua');
    console.log(engineer);

    expect(engineer.github).toEqual(expect.any(String));
});

// getGithub() method
test('gets Engineer Github value', () => {
    const engineer = new Engineer('Marcus', 8, 'marcus.morua@gmail.com', 'mmorua');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

// getRole() method
test('gets engineer role', () => {
    const engineer = new Engineer('Marcus', 8, 'marcus.morua@gmail.com', 'mmorua');

    expect(engineer.getRole()).toEqual('Engineer');
});