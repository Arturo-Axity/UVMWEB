class Config_BitacoraPO {
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

  export(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/binnacle/movements"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Configuraciones / Bitácora / Consulta de movimientos"
    );
    cy.wait(3000);

    // Export(LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de movimientos - Exportar', { capture: "fullPage" });
  }
} //final

export default Config_BitacoraPO;
