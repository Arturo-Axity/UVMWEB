class ZZPermisos_Desactivar_ACTIVARPO {
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
    // cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
    cy.screenshot(' Activar permisos ', { capture: "fullPage" });
  }
} //final

export default ZZPermisos_Desactivar_ACTIVARPO;
