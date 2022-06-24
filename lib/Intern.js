const intern = require("./Intern");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }
   getSchool() {
    return "school";
  }
  
  getRole() {
    return "Intern";
  }
}
module.exports = Intern