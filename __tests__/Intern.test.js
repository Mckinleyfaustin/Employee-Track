const Intern = require('../lib/Intern');

describe('This test suite tests the Intern class', () => {
  test("Create a new Intern object or instance", () => {
    const newIntern = new Intern('Alyssa Foster', 210198, 'alyssa.foster@rawpro.com', 'UNCC');

    // check that the property 'name' is any string
    expect(newIntern.name).toBe('Alyssa Foster');

    // check that the property 'id' is any number
    expect(newIntern.id).toEqual(expect.any(Number));

    // check that the property 'email' is exactly 'squiggles@gmail.com'
    expect(newIntern.email).toBe('alyssa.foster@rawpro.com');

    // check that the property 'email' is exactly 'squiggles@gmail.com'
    expect(newIntern.school).toBe('UNCC');
  })
});