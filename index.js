const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./lib/classes");
const {
  menu,
  managerQuestion,
  internQuestion,
  engineerQuestion,
} = require("./src/questions");
const generateHTML = require("./src/template-helper");
let employeeArr = [];

const generateManager = async () => {
  const managerAnswer = await inquirer.prompt(managerQuestion);
  const manager = new Manager(
    managerAnswer.name,
    managerAnswer.id,
    managerAnswer.email,
    managerAnswer.office
  );
  employeeArr.push(manager);
};

const promptEngineerQuestion = async () => {
  const engineerAnswer = await inquirer.prompt(engineerQuestion);
  const engineer = new Engineer(
    engineerAnswer.name,
    engineerAnswer.id,
    engineerAnswer.email,
    engineerAnswer.github
  );
  employeeArr.push(engineer);
  generateEmployee();
};

const promptInternQuestion = async () => {
  const internAnswer = await inquirer.prompt(internQuestion);
  const intern = new Intern(
    internAnswer.name,
    internAnswer.id,
    internAnswer.email,
    internAnswer.school
  );
  employeeArr.push(intern);
  generateEmployee();
};

const generateEmployee = async () => {
  const role = await inquirer.prompt(menu);
  switch (role.choice) {
    case "Engineer":
      promptEngineerQuestion();
      break;
    case "Intern":
      promptInternQuestion();
      break;
    case "Finish":
      generateHTML(employeeArr);
      break;
    case "default":
      console.log("Error");
  }
};

const generateTeam = async () => {
  await generateManager();
  generateEmployee();
};

generateTeam();
