class Calend_Consulta_CalendPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/calendar/admin/consult"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Calendarios / Administración de calendarios / Consulta de calendarios"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    // Datos principales Configuración
    cy.get("#title").type("CALEN120723");
    cy.wait(tiempo);
    cy.get("#description").type("PRUEBA12C");
    cy.wait(tiempo);
    cy.get(".date-custom > .laureate-icon-png > img").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-datepicker-2"]/div/mat-multi-year-view/table/tbody/tr[3]/td[1]/button/span[1]'
    ).click();
    cy.wait(tiempo);
    //Cancelar
    cy.get(".btn-secondary > .mdc-button__label").click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);

    cy.screenshot(' Consulta de calendarios - Btn cancelar', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/calendar/admin/consult"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Calendarios / Administración de calendarios / Consulta de calendarios"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    //cy.get('.btn-stroked > .mat-button-wrapper').click()
    //cy.wait(tiempo)
    cy.get(".route").contains(
      "Calendarios / Consulta de calendarios / Nuevo calendario"
    );
    cy.wait(tiempo);
    cy.screenshot(' Consulta de calendarios - campos vacios', { capture: "fullPage" });

  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/calendar/admin/consult"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Calendarios / Administración de calendarios / Consulta de calendarios"
    );
    cy.wait(tiempo);

    //Busqueda (LISTO)
    cy.get("#mat-input-0").type("Calendario A 05");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de calendarios - Busqueda', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // Export(LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de calendarios - Exportar', { capture: "fullPage" });
  }
} //final

export default Calend_Consulta_CalendPO;
