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
