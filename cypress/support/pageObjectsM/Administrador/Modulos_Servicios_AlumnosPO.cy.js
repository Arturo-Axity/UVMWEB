class Modulos_Servicios_AlumnosPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/student/web"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Módulos y servicios / Portal alumnos"
    );
    cy.wait(tiempo);

    //Exporta (LISTO)
    cy.get(".export > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Módulos y servicios / Portal alumnos - Exportar ', { capture: "fullPage" });
  }
} //final

export default Modulos_Servicios_AlumnosPO;
