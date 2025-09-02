class RecurDigPO {
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

  busquedaBib(t) {
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

    cy.get("[data-testid='item-icon-digital-resources']")
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Recursos digitales");
    cy.xpath("//div[contains(@class,'22')]").click();
    cy.wait(tiempo);
    cy.get("[data-testid='Buscar documento-test']").type("Documento");
    cy.wait(tiempo);
    cy.screenshot('Recursos digitales - Busqueda', { capture: "fullPage" });
  }
} //final

export default RecurDigPO;
