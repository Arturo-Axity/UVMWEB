class Modulos_Servicios_AplicacionPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/student/mobile"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Módulos y servicios / Aplicación alumnos"
    );
    cy.wait(tiempo);

    //Exportar
    cy.get(".export > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Módulos y servicios / Aplicación alumnos - Exportar ', { capture: "fullPage" });
  }
} //final

export default Modulos_Servicios_AplicacionPO;
