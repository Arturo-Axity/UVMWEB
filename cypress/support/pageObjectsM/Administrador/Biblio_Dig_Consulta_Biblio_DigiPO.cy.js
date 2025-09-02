class Biblio_Dig_Consulta_Biblio_DigiPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Btn cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".content-buttons > .btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Campos vacios', { capture: "fullPage" });

  }

  happrPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get("#nameLibrary").type("PCYPRESSSS");
    cy.wait(tiempo);
    cy.get("#description").type("prueba cypress");
    cy.wait(tiempo);
    cy.get("#expirationDays").type("3");
    cy.wait(tiempo);
    cy.get(".info").click();
    cy.wait(tiempo);
    cy.get("#mat-mdc-checkbox-1-input").click();
    cy.wait(tiempo);
    cy.get(".cdk-overlay-backdrop").click();
    cy.wait(tiempo);
    cy.get("#sizeFile").type("5");
    cy.wait(tiempo);
    //Buscador 1 Responsable
    cy.get("#mat-input-1").type("heidegger");
    cy.wait(tiempo);
    cy.get(
      ":nth-child(4) > app-search-users-table > .content-search-table > .container-search > .search > app-input-search-bar > .ng-untouched > .search-bar > .icon-search > img"
    ).click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="mat-option-7"]/span').click({ force: true });
    cy.wait(tiempo);
    cy.get(".ml-3 > .mdc-button__label").click();
    cy.wait(tiempo);
    //checks
    cy.xpath('//*[@id="7-button"]/div[2]/div/div[1]').click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="8-button"]/div[2]/div/div[1]').click();
    cy.wait(tiempo);
    cy.get(".content-buttons > .btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - HappyPath', { capture: "fullPage" });

  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Consulta de bibliotecas digitales"
    );
    cy.wait(tiempo);

    // BUSCADOR (LISTO)
    cy.get("#mat-input-0").type("test");
    cy.wait(tiempo);
    cy.xpath('//*[@id="mat-option-7"]/span').click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // SWITCHS (LISTO)
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-12-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(4000);
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-22-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Switchs', { capture: "fullPage" });


    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[7]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-detail-digital-libraries/section/app-breadcrumb-bar/div/button/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Ver detalle', { capture: "fullPage" });


    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[7]/app-action-buttons/div/div/button[2]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Editar', { capture: "fullPage" });


    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Consulta de bibliotecas digitales - Exportar', { capture: "fullPage" });

  }
} //final

export default Biblio_Dig_Consulta_Biblio_DigiPO;
