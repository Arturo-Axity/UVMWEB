class Cata_Dias_ProrrogaPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Días de prórroga"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-day/div/div[3]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - Btn Cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Días de prórroga"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - Campos vacios', { capture: "fullPage" });

  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Días de prórroga"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="noDays"]').type("8");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-day/div/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - HappyPath', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Días de prórroga"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("30");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //SWICHES COMPLETOS - Registro:30
    cy.get(
      "#mat-mdc-slide-toggle-12-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.get(
      "#mat-mdc-slide-toggle-22-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - Switchs', { capture: "fullPage" });

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[3]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-new-day/div/div[4]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - Editar', { capture: "fullPage" });

    /* // DESCOMENTAR EN CASO DE PROBAR ELIMINAR.
     //Eliminar - Completo - registro:
     cy.get('#mat-input-0').type('55')
     cy.wait(tiempo)
     cy.get('.icon-search').click()
     cy.wait(tiempo)
     // xpath boton eliminar (Listo)
     cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr/td[3]/app-action-buttons/div/div/button[2]/span').click({force:true})
     cy.wait(tiempo)
     // Boton Confirmar (Lito)
     cy.xpath('//*[@id="mat-mdc-dialog-4"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]').click()
     cy.wait(tiempo)
     cy.get('#mat-input-0').clear()
     cy.wait(tiempo)
     */

    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Días de prórroga - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_Dias_ProrrogaPO;
