const Manager = require('../lib/Manager');

describe('This test suite tests the Manager class', () => {
  test("Create a new Manager object or instance", () => {
    const newManager = new Manager('McKinley Faustin', 120386, 'mckinley.faustin@rawpro.com', '23');

    // check that the property 'name' is any string
    expect(newManager.name).toEqual(expect.any(String));

    // check that the property 'id' is any number
    expect(newManager.id).toEqual(expect.any(Number));

    // check that the property 'email' is exactly 'mckinley.faustin@rawpro.com'
    expect(newManager.email).toBe('mckinley.faustin@rawpro.com');

    // check that the property 'Office Number' is exactly '23'
    expect(newManager.officeNumber).toBe('23');
  })
});
