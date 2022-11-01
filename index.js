const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./lib/classes");
const {
  menu,
  managerQuestions,
  internQuestions,
  engineerQuestions,
} = require("./src/questions");
const generateHTML = require("./src/template-helper");
let employeeArr = [];

const generateManager = async () => {
  const managerAnswer = await inquirer.createPromptModule(managerQuestions);
  const manager = new Manager(
    managerAnswer.name,
    managerAnswer.id,
    managerAnswer.email,
    managerAnswer.office
  );
  employeeArr.push(manager);
};

const promptEngineerQuestions = async () => {
  const engineerAnswer = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(
    engineerAnswer.name,
    engineerAnswer.id,
    engineerAnswer.email,
    engineerAnswer.github
  );
  employeeArr.push(engineer);
  generateEmployee();
};

const promptInternQuestions = async () => {
  const internAnswer = await inquirer.prompt(internQuestions);
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
      promptEngineerQuestions();
      break;
    case "Intern":
      promptInternQuestions();
      break;
    case "Finished":
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
