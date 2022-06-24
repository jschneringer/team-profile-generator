const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");

// hold info for question
const inquirer = requre("require");
const teamMemberObjectArray = [];

//collecting input
const init = () => {
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the Managers Id?",
        },
        {
          type: "input",
          name: "name",
          message: "What is the Managers name?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Managers email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Managers Office Number",
        },
      ])
      //creating Manager Object
      .then((answers) => {
        const manager = new Manager(
          answers.id,
          answers.name,
          answers.email,
          answers.officeNumber
        );
        teamMemberObjectArray.push(manager);
        addEmployees();
      });
  };

  function addEmployees() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What employees would you like to add?",
          name: "choice",
          choices: ["Engineer", "Intern", "I'm Done"],
        },
      ])

//Logic shifts user to various paths
      .then((answer) => {
        switch (answer.choice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;

          default:
            buildTeam();
            break;
        }
      });
  }
  function createEngineer(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the Engineer Id?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Engineer name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub",
      },
    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.id,
          answers.name,
          answers.email,
          answers.gitHub
        );
        teamMemberObjectArray.push(Engineer);
        addEmployees();
      });
  };
  function createIntern(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the Intern Id?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Intern name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Interns's school",
      },
    ])
    .then((answers) => {
        const intern = new Intern(
          answers.id,
          answers.name,
          answers.email,
          answers.getschool
        );
        teamMemberObjectArray.push(intern);
        addEmployees();
      });
    }
}

  createManager();

init();
