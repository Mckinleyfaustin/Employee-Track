const Engineer = require('../lib/Engineer');

describe('This test suite tests the Engineer class', () => {
  test("Create a new Engineer object or instance", () => {
    const newEngineer = new Engineer('Jimmay Franklin', 210589, 'jimmay.franklin@rawpro.com', 'jxf5484');

    // check that the property 'name' is any string
    expect(newEngineer.name).toBe('Jimmay Franklin');

    // check that the property 'id' is any number
    expect(newEngineer.id).toEqual(expect.any(Number));

    // check that the property 'email' is exactly 'jimmay.franklin@rawpro.com'
    expect(newEngineer.email).toBe('jimmay.franklin@rawpro.com');

    // check that the property 'github' is exactly 'jxf5484'
    expect(newEngineer.github).toBe('jxf5484');
  })
});