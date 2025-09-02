class Plantillas_Cartas_de_AceptacionPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/templates/admin/acceptance-letters"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Plantillas / Administración de plantillas / Cartas de aceptación"
    );
    cy.wait(tiempo);
    //Boton Nuevo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get("#title").type("Prueba");
    cy.wait(tiempo);
    cy.get(".buttons > .btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Cartas de aceptación - Btn cancelar ', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/templates/admin/acceptance-letters"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Plantillas / Administración de plantillas / Cartas de aceptación"
    );
    cy.wait(tiempo);
    //Boton Nuevo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Cartas de aceptación - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/templates/admin/acceptance-letters"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Plantillas / Administración de plantillas / Cartas de aceptación"
    );
    cy.wait(tiempo);

    // Buscador
    cy.get("#mat-input-0").type("Carta aceptar prorroga");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Cartas de aceptación - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Export (LISTO)
    cy.get(".btn-icon > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Cartas de aceptación - Exportar ', { capture: "fullPage" });
  }
} //final

export default Plantillas_Cartas_de_AceptacionPO;
