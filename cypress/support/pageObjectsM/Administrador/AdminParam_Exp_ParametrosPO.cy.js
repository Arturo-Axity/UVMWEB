class AdminParam_Exp_ParametrosPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/admin/EXPD"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Parámetros"
    );
    cy.wait(tiempo);

    //EDITAR - Completo
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[8]/td[5]/app-action-buttons/div/div/button/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-edit-param/section/div[2]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot('Administración de Parámetros - Editar', { capture: "fullPage" });


    // BUSCADOR - (LISTO)
    cy.get("#mat-input-0").type("Nuevo sitio en Sharepoint");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot('Administración de Parámetros - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // Export(LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot('Administración de Parámetros - Exportar', { capture: "fullPage" });

  }
} //final

export default AdminParam_Exp_ParametrosPO;
