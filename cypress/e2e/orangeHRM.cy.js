const { faker } = require("@faker-js/faker");
const { random } = require("lodash");

describe("template spec", () => {
  const adminUserName = "Admin";
  const adminPassword = "admin123";

  function login(userName, password) {
    cy.waitTillVisible("input");
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

  function generateUsernameAndPassword(firstName, lastName) {
    return {
      username: firstName + "123" + lastName,
      password: firstName + "123" + lastName,
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

    const fullName = firstName + " " + lastName;

    cy.get("label")
      .contains("Employee Id")
      .parent()
      .siblings("div")
      .find("input")
      .clear()
      .type("0303");
    cy.get("span")
      .contains("Employee Id already exists")
      .should("be.visible")
      .then(() => {
        const generateUniqueId = () =>
          Math.floor(1000 + Math.random() * 9000).toString();
        const checkUniqueId = () => {
          const newId = generateUniqueId();
          cy.get("label")
            .contains("Employee Id")
            .parent()
            .siblings("div")
            .find("input")
            .clear()
            .type(newId);
          cy.get("span")
            .contains("Employee Id already exists")
            .should("not.exist")
            .then(() => {
              cy.get("input[type='checkbox']").click({ force: true });
            });
        };
        checkUniqueId();
        const { username, password } = generateUsernameAndPassword(
          firstName,
          lastName
        );
        cy.get("label")
          .contains("Username")
          .parent()
          .siblings("div")
          .find("input")
          .type(username);
        cy.get("label")
          .contains("Password")
          .parent()
          .siblings("div")
          .find("input")
          .type(password);
        cy.get("label")
          .contains("Confirm Password")
          .parent()
          .siblings("div")
          .find("input")
          .type(password);
        cy.get("button[type='submit']").click();
      });
    cy.get(".oxd-text--toast-message").should(
      "have.text",
      "Successfully Saved"
    );
    cy.waitTillVisible("h6");
    cy.get("h6").should("contain.text", fullName);
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
