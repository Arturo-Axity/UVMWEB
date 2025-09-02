// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "login",
  (username = Cypress.env("email"), password = Cypress.env("password")) => {
    cy.session([username, password], () => {
      cy.visit(Cypress.config("baseUrl"));
      cy.wait(4000);
      cy.xpath(
        "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
      )
        .should("be.visible")
        .click({ force: true });

      cy.origin(
        "https://login.microsoftonline.com/",
        { args: { username } },
        ({ username }) => {
          cy.get('[name="loginfmt"]').type(`${username}{enter}`);
          cy.wait(2000);
        }
      );

      cy.origin(
        "https://login.microsoftonline.com",
        { args: { password } },
        ({ password }) => {
          cy.wait(4000);
          cy.get('input[type="password"]').type(`${password}{enter}`);
          cy.wait(2000);
        }
      );
    });
  }
);

Cypress.Commands.add(
  "login2",
  (username = Cypress.env("email2"), password = Cypress.env("password2")) => {
    cy.session([username, password], () => {
      cy.visit(Cypress.config("baseUrl2"));
      cy.wait(4000);

      cy.origin(
        "https://login.microsoftonline.com/",
        { args: { username } },
        ({ username }) => {
          cy.get('[name="loginfmt"]').type(`${username}{enter}`);
          cy.wait(2000);
        }
      );

      cy.origin(
        "https://login.microsoftonline.com",
        { args: { password } },
        ({ password }) => {
          cy.wait(4000);
          cy.get('input[type="password"]').type(`${password}{enter}`);
          cy.wait(2000);
        }
      );
    });
  }
);
