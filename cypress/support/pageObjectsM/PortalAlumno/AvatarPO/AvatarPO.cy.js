class AvatarPO {
  visitHome() {
    let tiempo = 2500;
    beforeEach(() => {
      cy.login();
      cy.wait(tiempo);
    });
  }

  screenShot(t) {
    let tiempo = t;
    cy.wait(tiempo);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  }

  perfil(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);
    cy.get('[data-testid="Avatar"]').click();
    cy.get('[data-testid="item-icon-profile"]').click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Perfil");
    cy.wait(tiempo);
    cy.screenshot('Avatar - Perfil', { capture: "fullPage" });
  }
} //final

export default AvatarPO;
