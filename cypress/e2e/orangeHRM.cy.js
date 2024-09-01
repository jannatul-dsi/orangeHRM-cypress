const { faker } = require("@faker-js/faker");
const { random } = require("lodash");

describe("template spec", () => {
  const adminUserName = "Admin";
  const adminPassword = "admin123";

  function login(userName, password) {
    cy.waitTillVisible("input")
    cy.get("input[name='username'").type(userName);
    cy.get("input[name='password'").type(password);
    cy.get("[type='submit']").click();
  }

  function getUserName() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
  }

  function createEmployee() {
    cy.get("span").contains("PIM").click();
    cy.waitTillVisible("h6");
    cy.get("h6").should("have.text", "PIM");
    cy.get("button").contains("Add").click();
    cy.waitTillVisible("h6");

    const { firstName, lastName } = getUserName();

    cy.get("input[name='firstName']").type(firstName);
    cy.get("input[name='lastName']").type(lastName);

    cy.get('label').contains("Employee Id").parent().siblings('div').find('input').clear().type("0303")
    cy.get("span").contains("Employee Id already exists").should('be.visible').then(() => {
      const generateUniqueId = () => Math.floor(1000 + Math.random() * 9000).toString();
  
      const checkUniqueId = () => {
          const newId = generateUniqueId();
          cy.get('label').contains("Employee Id").parent().siblings('div').find('input').clear().type(newId);
          cy.get("span").contains("Employee Id already exists").should('not.exist')
              .then(() => {
                cy.get("input[type='checkbox']").click({ force: true });
              });
      };
  
      checkUniqueId();
    })
  }
  before(() => {
    cy.visit("/");
    cy.title().should("eq", "OrangeHRM");
    login(adminUserName, adminPassword);
  });
  it("passes", () => {
    cy.waitTillVisible("h6");
    cy.get("h6").should("have.text", "Dashboard");
    createEmployee();
  });
});
