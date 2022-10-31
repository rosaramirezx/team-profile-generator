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

const engineerQuestion = [
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
