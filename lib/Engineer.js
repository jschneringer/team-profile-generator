const Engineer = require("./Engineer");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  getGitHub() {
    return "GitHub username";
  }
  
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer