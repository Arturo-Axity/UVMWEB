describe("login2", () => {
  beforeEach(() => {
    cy.login2(Cypress.env("email2"), Cypress.env("password2"));
  });

  it("should enter", () => {
    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/");
    cy.wait(9000);
    cy.get(".logo").should("exist");
  });
});
