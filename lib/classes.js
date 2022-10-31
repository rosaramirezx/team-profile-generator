class Employee {
  constructor(name, id, email) {
    this._name = name;
    this._id = id;
    this._email = email;
  }

  getName() {
    return this._name;
  }

  getId() {
    return this._id;
  }

  getEmail() {
    return this._email;
  }

  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this._officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this._officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this._github = github;
  }

  getGithub() {
    return this._github;
  }

  getRole() {
    return "Engineer";
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this._school = school;
  }

  getSchool() {
    return this._school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
