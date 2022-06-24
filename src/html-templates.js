const Engineer = require("../lib/Engineer");

const makeTeam = (team) => {
  const generateManagerCard = (manager) => {
    return `
        <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <!--Added test email -->
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.officeNumber}</li>
        <a href="mailto:${manager.email}">
        <li class="list-group-item">${manager.email}</li></a
      </ul>
        `
  }
  const html = [];

  html.push(
    team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManagerCard(manager))
  )
  html.push(
    team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateManagerCard(engineer))
  )
  html.push(
    team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateManagerCard(intern))
  )

    return html.join("")

}
