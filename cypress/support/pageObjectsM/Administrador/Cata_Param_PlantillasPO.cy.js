class Cata_Param_PlantillasPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parámetros de plantillas"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="name"]').type("Prueba");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-param/div/div[5]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de plantillas - Btn cancelar', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parámetros de plantillas"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de plantillas - Campos vacios', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parámetros de plantillas"
    );
    cy.wait(tiempo);

    // BUSCADOR (LISTO)
    cy.get("#mat-input-0").type("Alumno");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de plantillas - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //SWICHES
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-12-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-18-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de plantillas - Switchs', { capture: "fullPage" });

    //EDITAR - REGISTRO: carrera
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[5]/td[6]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-new-param/div/div[6]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Parámetros de plantillas - Editar', { capture: "fullPage" });

    //Eliminar - Completo - registro:Alumno // DESCOMENTAR EN CASO DE PROBAR ELIMINAR.
    /*
   cy.get('#mat-input-0').type('Alumno')
   cy.wait(tiempo)
   cy.get('.icon-search').click()
   cy.wait(tiempo)
   cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr/td[6]/app-action-buttons/div/div/button[2]/span').click({force:true})
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
    cy.screenshot(' Parámetros de plantillas - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_Param_PlantillasPO;
