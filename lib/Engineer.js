const Engineer = require("./Engineer");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  getGitHub() {
    return this.getGitHub;
  }
  
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer