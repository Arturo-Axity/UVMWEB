class Cata_Catalogo_CampusPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/campus"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Campus"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.wait(tiempo);
    cy.get("#mat-input-0").type("SAN RAFAEL");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Campus - Buscador', { capture: "fullPage" });

    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);
    // Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Campus - Exportar', { capture: "fullPage" });

  }
} //final

export default Cata_Catalogo_CampusPO;
