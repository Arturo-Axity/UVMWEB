class Cata_Catalogo_DHWPO {
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

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/dwh");
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Administración de catálogos / DWH");
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("Campus");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' DWH - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' DWH - Exportar', { capture: "fullPage" });

  }
} //final

export default Cata_Catalogo_DHWPO;
