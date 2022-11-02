const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

const generateBodyBefore = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="d-flex justify-content-center align-items-center">
            <h1>My Team</h1>
        </header>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
    `;
};

const generateBodyAfter = () => {
  return `        
            </div>
        </div>
    </body>
    </html>
    `;
};

const generateManager = (managerData) => {
  return `
    <div class="col-12 col-md-4 col-lg-3 my-3 mx-1 d-flex justify-content-center align-items-center">
        <div class="card " style="width: 16rem;">
            <div class="card-body  ">
                <h5 class="card-title">${managerData.getName()}</h5>
                <p><i class="fa-solid fa-mug-hot"></i><span class="card-text pl-2">${managerData.getRole()}</span></p>
            </div>
            <ul class="list-group list-group-flush rounded-0 ">
                <li class="list-group-item">ID: ${managerData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${managerData.getEmail()}">${managerData.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${managerData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
};

const generateEngineer = (engineerData) => {
  return `
    <div class="col-12 col-md-4 col-lg-3 my-3 mx-1 d-flex justify-content-center align-items-center">
        <div class="card " style="width: 16rem;">
            <div class="card-body  ">
                <h5 class="card-title">${engineerData.getName()}</h5>
                <p><i class="fa-solid fa-glasses"></i><span class="card-text pl-2">${engineerData.getRole()}</span></p>
            </div>
            <ul class="list-group list-group-flush rounded-0 ">
                <li class="list-group-item">ID: ${engineerData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
                <li class="list-group-item">Github:<a href="https://github.com/${engineerData.getGithub()}"> ${engineerData.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
};

const generateIntern = (internData) => {
  return `
    <div class="col-12 col-md-4 col-lg-3 my-3 mx-1 d-flex justify-content-center align-items-center">
        <div class="card " style="width: 16rem;">
            <div class="card-body  ">
                <h5 class="card-title">${internData.getName()}</h5>
                <p><i class="fa-solid fa-graduation-cap"></i><span class="card-text pl-2">${internData.getRole()}</span></p>
            </div>
            <ul class="list-group list-group-flush rounded-0 ">
                <li class="list-group-item">ID: ${internData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${internData.getEmail()}">${internData.getEmail()}</a></li>
                <li class="list-group-item">School: ${internData.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
};

generateHTML = async (employeeArr) => {
  let html = generateBodyBefore();
  html += generateManager(employeeArr[0]);

  for (let x = 0; x < employeeArr.length; x++) {
    switch (employeeArr[x].getRole()) {
      case "Engineer":
        html += generateEngineer(employeeArr[x]);
        break;
      case "Intern":
        html += generateIntern(employeeArr[x]);
        break;
      case "default":
        console.log(error);
    }
  }

  html += generateBodyAfter();
  writeFile("./dist/index.html", html).then((err) =>
    err
      ? console.log(err)
      : console.log("index.html successfully generated in the dist folder!")
  );
};

module.exports = generateHTML;
