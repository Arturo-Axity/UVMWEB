class Cata_Catalogo_CalendPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios"
    );
    cy.wait(tiempo);
    cy.get(".cdk-column-name > .ng-star-inserted").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios / Tipos de Calendario"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-new-calendar > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="name"]').type("RUD");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-actions-calendar/section/div[3]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de Calendario - Btn Cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios"
    );
    cy.wait(tiempo);
    cy.get(".cdk-column-name > .ng-star-inserted").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios / Tipos de Calendario"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-new-calendar > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de Calendario - Campos vacios', { capture: "fullPage" });

  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios"
    );
    cy.wait(tiempo);
    cy.get(".cdk-column-name > .ng-star-inserted").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios / Tipos de Calendario"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-new-calendar > .mdc-button__label").click();
    cy.wait(tiempo);

    let numero_test = 1;

    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.xpath('//*[@id="name"]')
        .should("be.visible")
        .type("Calendario " + cantidad + " prueba");
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-actions-calendar/section/div[3]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
      ).click();

      cy.wait(tiempo);
      cy.screenshot(' Tipos de Calendario - HappyPath', { capture: "fullPage" });

    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios"
    );
    cy.wait(tiempo);
    cy.get(".cdk-column-name > .ng-star-inserted").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Calendarios / Tipos de Calendario"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-1").type("RD");
    cy.wait(tiempo);
    cy.get(".icon-search").click({ force: true });
    cy.wait(tiempo);
    cy.screenshot(' Tipos de Calendario - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-1").clear();
    cy.wait(tiempo);

    //filtrar
    cy.get("#mat-select-value-13").click();
    cy.get("#mat-option-17").click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de Calendario - Filtrar', { capture: "fullPage" });

    //Menu de acciones
    /* DESCOMENTAR EN CASO DE PROBAR ELIMINAR.
  //Eliminar (listo)
  cy.get('#mat-input-1').type('PR')
  cy.wait(tiempo)
  cy.get('.icon-search').click()
  cy.wait(tiempo)
  // xpath boton eliminar (Listo)
  cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr/td[4]/app-action-buttons/div/div/button[2]/span').click({force:true})
  cy.wait(tiempo)
  // Boton Confirmar (Lito)
  cy.xpath('//*[@id="mat-mdc-dialog-4"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]').click()
  cy.wait(tiempo)
  cy.get('#mat-input-1').clear()
  cy.wait(tiempo)
   */
    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de Calendario - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_Catalogo_CalendPO;
