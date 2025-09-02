class Biblio_Dig_Consulta_Doc_AdminPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/adtve-docs"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de documentos administrativos"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".ml-1 > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de documentos administrativos - Btn cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/adtve-docs"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de documentos administrativos"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".ml-3 > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de documentos administrativos - Campos vacios', { capture: "fullPage" });

  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/adtve-docs"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de documentos administrativos"
    );
    cy.wait(tiempo);

    // BUSCADOR (MODIFICAR DE ACUERDO AL REGISTRO)
    cy.get("#mat-input-0").type("Soy Imagen");
    cy.wait(15000);
    cy.get(".icon-search").click();
    cy.wait(15000);
    cy.screenshot(' Consulta de documentos administrativos - Buscador', { capture: "fullPage" });

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[9]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(4000);
    cy.screenshot(' Consulta de documentos administrativos - Ver detalle', { capture: "fullPage" });
    cy.wait(1500)
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(7000);

    //Export (LISTO)
    cy.get(".btn-secondary.btn-icon > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de documentos administrativos - Exportar', { capture: "fullPage" });

    // ACTUALIZAR BOTON
    cy.get(".btn-update > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de documentos administrativos - Btn Actualizar', { capture: "fullPage" });

  }
} //final

export default Biblio_Dig_Consulta_Doc_AdminPO;
