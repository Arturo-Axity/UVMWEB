class Modulos_Servicios_AdminPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Módulos y servicios / Portal administración"
    );
    cy.wait(tiempo);

    //Exporta (Listo)
    cy.get(".export > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Módulos y servicios / Portal administración - Exportar ', { capture: "fullPage" });
  }
} //final

export default Modulos_Servicios_AdminPO;
