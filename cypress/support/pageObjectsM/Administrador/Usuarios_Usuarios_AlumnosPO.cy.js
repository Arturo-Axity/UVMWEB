class Usuarios_Usuarios_AlumnosPO {
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

  btnCancelar(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").should("be.visible").click();
    cy.wait(5000);

    cy.get(".ml-1 > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Enrolamiento de usuarios / Alumnos - Btn cancelar ', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").should("be.visible").click();
    cy.wait(5000);

    cy.get(".ml-3 > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".sub-title")
      .contains(
        "Por favor verifique que haya seleccionado un usuario y asignado roles y campus (solo portal administración)"
      )
      .should("be.visible");
    cy.wait(tiempo);
    cy.screenshot(' Enrolamiento de usuarios / Alumnos - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
    );
    cy.wait(tiempo);
    cy.get("#mat-select-2 > .mat-mdc-select-trigger").click();
    cy.get("#mat-option-54").click();
    cy.wait(tiempo);
    cy.screenshot(' Enrolamiento de usuarios / Alumnos - Filtrar ', { capture: "fullPage" });
  }
} //final

export default Usuarios_Usuarios_AlumnosPO;
