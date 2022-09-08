const Employee = require('../lib/Employee');

describe('This test suite tests the Employee class', () => {
  test("Create a new Employee object or instance", () => {
    const newEmployee = new Employee('Kieran Faustus', 220294, 'kieran.faustus@rawpro.com');

    // check that the property 'name' is any string
    expect(newEmployee.name).toEqual(expect.any(String));

    // check that the property 'id' is any number
    expect(newEmployee.id).toEqual(expect.any(Number));

    // check that the property 'email' is exactly 'kieran.faustus@rawpro.com'
    expect(newEmployee.email).toBe('kieran.faustus@rawpro.com');

    // describe("Initialization", () => {
    //   it("should initiate an object", () => {
    //     const obj = new Employee(); 
    //     expect(typeof(obj)).toEqual("object");
    //   });
    // });
  })
})
// describe("Name", () => {
//       it("should create new name", () => {
//         const obj = new Employee("Billy");
//         expect(obj.name).toEqual("Billy");
//       });
//     });

//     describe("Id", () => {
//       it("should create new id", () => {
//         const obj = new Employee("Billy",12);
//         expect(obj.id).toEqual(12);
//       });
//     });

//     describe("Email", () => {
//       it("should create new Email", () => {
//         const obj = new Employee("Billy",12, "billy.email@email");
//         expect(obj.email).toEqual("billy.email@email");
//       });
//     });

//     describe("getName", () => {
//       it("can return name by getName method", () => {
//         const obj = new Employee("Billy");
//         expect(obj.getName()).toEqual("Billy");
//       });
//     });

//     describe("getId", () => {
//       it("can return id by getId method", () => {
//         const obj = new Employee("Billy", 12);
//         expect(obj.getId()).toEqual(12);
//       });
//     });
    
//     describe("getEmail", () => {
//       it("can return email by getEmail method", () => {
//         const obj = new Employee("Billy", 12, "billy.email@email");
//         expect(obj.getEmail()).toEqual("billy.email@email");
//       });
//     });
//     describe("getRole", () => {
//       it("can return role by getRole method", () => {
//         const role = "Employee";
//         const obj = new Employee("Billy", 12, "billy.email@email");
//         expect(obj.getRole()).toEqual(role);
//       });
//     });
// });