class PagoLineaPO {
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

  cancelar(t) {
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

    cy.get('[data-testid="item-icon-uvmenlinea"]').click();
    cy.get("._titleModal_uom33_10").should(
      "have.text",
      "Estas a punto de salir de la app"
    );
    cy.get(".mgmdS > .text-content").click();
    cy.wait(tiempo);
    cy.screenshot("Pagp en linea - Cancelar", { capture: "fullPage" });
  }

  irLink(t) {
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

    cy.get('[data-testid="item-icon-uvmenlinea"]').click();
    cy.get("._titleModal_uom33_10").should(
      "have.text",
      "Estas a punto de salir de la app"
    );
    cy.get(".eQNCuS > .text-content").click();
    cy.wait(tiempo);
    cy.screenshot("Pagp en linea - Ir a link", { capture: "fullPage" });
  }
} //final

export default PagoLineaPO;
