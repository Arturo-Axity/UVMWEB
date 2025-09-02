class Config_AlumnosPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/binnacle/students"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Bitácora / Alumnos");
    cy.wait(tiempo);

    // Export(LISTO)
    cy.get(".btn-icon > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Bitácora / Alumnos - Exportar', { capture: "fullPage" });

  }
} //final

export default Config_AlumnosPO;
