const { Manager } = require("../lib/classes");

describe("Manager class", () => {
  const manager = new Manager("Bradley", 4, "jesterb@seattleu.edu", 7);

  it("returns the name, id , email and office number of the manager", () => {
    expect(manager._name).toBe("Bradley");
    expect(manager._id).toBe(4);
    expect(manager._email).toBe("jesterb@seattleu.edu");
    expect(manager._officeNumber).toBe(7);
  });

  it("getName () method returns the name of the manager", () => {
    expect(manager.getName()).toBe(manager._name);
  });

  it("getId () method returns the ID of the manager", () => {
    expect(manager.getId()).toBe(manager._id);
  });

  it("getEmail () method returns the email of the manager", () => {
    expect(manager.getEmail()).toBe(manager._email);
  });

  it("getOffice () method returns the office number of the manager", () => {
    expect(manager.getOfficeNumber()).toBe(manager._officeNumber);
  });

  it('getRole () method returns "Manager"', () => {
    expect(manager.getRole()).toBe("Manager");
  });
});
