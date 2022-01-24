// Using Intern constructor
const Intern = require('../lib/Intern.js');
test('creates an intern object', () => {
    const intern = new Intern('Marcus', 8, 'marcus.morua@gmail.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

// getSchool() method
test('gets Interns school', () => {
    const intern = new Intern('Marcus', 8, 'marcus.morua@gmail.com', 'UT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

// getRole() method
test('gets intern role', () => {
    const intern = new Intern('Marcus', 8, 'marcus.morua@gmail.com', 'UT');

    expect(intern.getRole()).toBe('Intern');
});
