class Cata_Biblio_DigPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales / Tipo Documento"
    );
    cy.wait(tiempo);
    cy.get(".btn-new-library > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="name"]').type("CYPRESS");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-actions-library/section/div[3]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Bibliotecas digitales / Tipo Documento - Btn Cancelar', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales / Tipo Documento"
    );
    cy.wait(tiempo);
    cy.get(".btn-new-library > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Bibliotecas digitales / Tipo Documento - Campos vacios', { capture: "fullPage" });

  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales / Tipo Documento"
    );
    cy.wait(tiempo);
    cy.get(".btn-new-library > .mdc-button__label").click();
    cy.wait(tiempo);

    let numero_test = 1;

    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.xpath('//*[@id="name"]')
        .should("be.visible")
        .type("Tipo Doc " + cantidad + " prueba");

      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-actions-library/section/div[3]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
      ).click();

      cy.wait(tiempo);
      cy.screenshot(' Bibliotecas digitales / Tipo Documento - HappyPath', { capture: "fullPage" });

    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales"
    );
    cy.wait(tiempo);
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Bibliotecas digitales / Tipo Documento"
    );
    cy.wait(tiempo);

    // BUSCADOR (LISTO)
    cy.get("#mat-input-1").type("Prueba1");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Bibliotecas digitales / Tipo Documento - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-1").clear();
    cy.wait(tiempo);

    //EDITAR - COMPLETO
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[4]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Bibliotecas digitales / Tipo Documento - Editar', { capture: "fullPage" });

    /* DESCOMENTAR EN CASO DE PROBAR ELIMINAR.
  // COMPLETO - REGISTRO juan
  //Eliminar -- Usar el Buscador (Listo)
  cy.get('#mat-input-1').type('juan')
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
    cy.screenshot(' Bibliotecas digitales / Tipo Documento - Exportar', { capture: "fullPage" });

  }
} //final

export default Cata_Biblio_DigPO;
