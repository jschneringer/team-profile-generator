const Manager = require("../lib/Manager");

// hold info for question
const inquirer = requre("require");
const teamMemberObjectArray = [];


//collecting input
const init = () => {
  const createManager = () => {
    inquirer.prompt([
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
    .then (answers => {
        const manager = new Manager (
            answers.id,
            answers.name,
            answers.email,
            answers.officeNumber
        )
    })
  };
};
init();
