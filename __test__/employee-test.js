const { Employee } = require("../lib/classes");

describe("Employee class", () => {
  const employee = new Employee("Bradley", 1, "jesterb@seattleu.edu");
  it("returns the name, id and email of the employee", () => {
    expect(employee._name).toBe("Bradley");
    expect(employee._id).toBe(1);
    expect(employee._email).toBe("jesterb@seattleu.edu");
  });

  it("getName() method returns the name of the employee", () => {
    expect(employee.getName()).toBe(employee._name);
  });

  it("getId() method returns the id of the employee", () => {
    expect(employee.getId()).toBe(employee._id);
  });

  it("getEmail() method returns the email of the employee", () => {
    expect(employee.getEmail()).toBe(employee._email);
  });

  it("getRole() method returns 'Employee'", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
