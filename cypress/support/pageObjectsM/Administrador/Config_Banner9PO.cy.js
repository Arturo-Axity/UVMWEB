class Config_Banner9PO {
  visitHome() {
    let tiempo = 2500;
    beforeEach(() => {
      cy.login2();
      cy.wait(tiempo);
    });
  }

  screenShot(t) {
    let tiempo = t;
    cy.wait(tiempo);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/banner/campus"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Banner 9 / Campus");
    cy.wait(tiempo);

    //Filtrar
    cy.get("#mat-select-value-3").click({ force: true });
    cy.get("#mat-option-5").should("be.visible").click({ force: true });
    cy.wait(tiempo);
    cy.screenshot("Filtrar Campus Banner 9", { capture: "fullPage" });
    cy.get('#mat-select-value-7').click({ force: true })
    cy.get('#mat-option-11').should("be.visible").click({ force: true });

    // BUSCADOR (LISTO
    cy.get("#mat-input-0").type("LOMAS VERDES");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot("Buscador Banner 9", { capture: "fullPage" });
    cy.wait(tiempo);
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot("Exportar Banner 9", { capture: "fullPage" });
  }
} //final

export default Config_Banner9PO;
