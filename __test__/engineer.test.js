const { Engineer } = require("../lib/classes");

describe("Engineer class", () => {
  const engineer = new Engineer(
    "Bradley",
    2,
    "jesterb@seattleu.edu",
    "jesterb0206"
  );

  it("returns the name, id, email and GitHub username of the engineer", () => {
    expect(engineer._name).toBe("Bradley");
    expect(engineer._id).toBe(2);
    expect(engineer._email).toBe("jesterb@seattleu.edu");
    expect(engineer._github).toBe("jesterb0206");
  });

  it("getName() method returns the name of the engineer", () => {
    expect(engineer.getName()).toBe(engineer._name);
  });

  it("getId() method returns the ID of the engineer", () => {
    expect(engineer.getId()).toBe(engineer._id);
  });

  it("getEmail() method returns the email of the engineer", () => {
    expect(engineer.getEmail()).toBe(engineer._email);
  });

  it("getGitHub() method returns the GitHub username of the engineer", () => {
    expect(engineer.getGithub()).toBe(engineer._github);
  });

  it('getRole() returns "Engineer"', () => {
    expect(engineer.getRole()).toBe("Engineer");
  });
});
