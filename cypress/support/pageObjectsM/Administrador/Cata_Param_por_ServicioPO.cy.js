class Cata_Param_por_ServicioPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/service-params"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parámetros de servicios"
    );
    cy.wait(tiempo);

    // DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[4]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de servicios - Ver detalle', { capture: "fullPage" });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-edit-param/div/div[4]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);

    //EDITAR - Completo
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[4]/app-action-buttons/div/div/button[2]/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-edit-param/div/div[4]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de servicios - Editar', { capture: "fullPage" });

    // BUSCADOR - SWITCHES (LISTO)
    cy.get("#mat-input-0").type("Devolución");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de servicios - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // Export(LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de servicios - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_Param_por_ServicioPO;
