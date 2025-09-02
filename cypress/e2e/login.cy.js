describe("login", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
  });

  it("should enter", () => {
    cy.visit("/");
    cy.wait(9000);
    cy.get("img").should("exist");
  });
});
