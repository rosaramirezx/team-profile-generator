const managerQuestions = [
  {
    type: "input",
    message: "What's the manager's name?",
    name: "name",
    validate: function (input) {
      return typeof input === "string"
        ? true
        : "Please enter the manager's name!";
    },
  },

  {
    type: "input",
    message: "What's the manager's employee ID?",
    name: "id",
    validate: function (id) {
      return isNaN(parseInt(id))
        ? "Please enter the manager's employee ID!"
        : true;
    },
  },

  {
    type: "input",
    message: "What's the manager's email address?",
    name: "email",
    validate: function (email) {
      return (
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        ) || "Please enter the manager's email!"
      );
    },
  },

  {
    type: "input",
    message: "What's the manager's office number?",
    name: "office",
    validate: function (office) {
      return isNaN(parseInt(office))
        ? "Please enter the manager's office number!"
        : true;
    },
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "what's the engineer's name?",
    name: "name",
    validate: function (input) {
      return typeof input === "string"
        ? true
        : "Please enter the engineer's name!";
    },
  },

  {
    type: "input",
    message: "What's the engineer's employee ID?",
    name: "id",
    validate: function (id) {
      return isNaN(parseInt(id))
        ? "Please enter the engineer's employee ID!"
        : true;
    },
  },

  {
    type: "input",
    message: "What's the engineer's email address?",
    name: "email",
    validate: function (email) {
      return (
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        ) || "Please enter the engineer's email!"
      );
    },
  },

  {
    type: "input",
    message: "What's the engineer's GitHub username?",
    name: "github",
    validate: function (github) {
      return !!github || "Please enter the engineer's GitHub username!";
    },
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What's the intern's name?",
    name: "name",
    validate: function (input) {
      return typeof input === "string"
        ? true
        : "Please enter the intern's name!";
    },
  },

  {
    type: "input",
    message: "What's the intern's employee ID?",
    name: "id",
    validate: function (id) {
      return isNaN(parseInt(id))
        ? "Please enter the intern's employee ID!"
        : true;
    },
  },

  {
    type: "input",
    message: "What's the intern's email address?",
    name: "email",
    validate: function (email) {
      return (
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        ) || "Please enter the intern's email!"
      );
    },
  },

  {
    type: "input",
    message: "What school does the intern attend?",
    name: "school",
    validate: function (school) {
      return !!school || "Please enter the intern's school's name!";
    },
  },
];

const menu = [
  {
    type: "list",
    name: "choice",
    message:
      "Add an engineer or intern to your team or select finished if all done!",
    choices: ["Engineer", "Intern", "Finished"],
  },
];

module.exports = { managerQuestions, engineerQuestions, internQuestions, menu };
