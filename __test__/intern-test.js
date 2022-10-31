const { Intern } = require("../lib/classes");

describe("Intern class", () => {
  const intern = new Intern(
    "Bradley",
    3,
    "jesterb@seattleu.edu",
    "University of Washington"
  );

  it("returns the name, id, email and school of the intern", () => {
    expect(intern._name).toBe("Bradley");
    expect(intern._id).toBe(3);
    expect(intern._email).toBe("jesterb@seattleu.edu");
    expect(intern._school).toBe("University of Washington");
  });

  it("getName method returns the name of the intern", () => {
    expect(intern.getName()).toBe(intern._name);
  });

  it("getId() method returns the ID of the intern", () => {
    expect(intern.getId()).toBe(intern._id);
  });

  it("getEmail() method returns the email of the intern", () => {
    expect(intern.getEmail()).toBe(intern._email);
  });

  it("getSchool() method returns the school that the intern is currently attending", () => {
    expect(intern.getSchool()).toBe(intern._school);
  });

  it('getRole returns "Intern"', () => {
    expect(intern.getRole()).toBe("Intern");
  });
});
