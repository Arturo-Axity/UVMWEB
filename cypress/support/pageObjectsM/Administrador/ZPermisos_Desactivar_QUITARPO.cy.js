class ZPermisos_Desactivar_QUITARPO {
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
    cy.screenshot(' Quitar permisos ', { capture: "fullPage" });
  }
} //final

export default ZPermisos_Desactivar_QUITARPO;
