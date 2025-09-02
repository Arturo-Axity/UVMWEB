class Cata_Tipo_de_ArchivosPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Administración de catálogos"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    //cy.xpath('').click()
    cy.xpath('//*[@id="name"]').type("XR");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-file/div/div[3]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de catálogos - Btn cancelar', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Administración de catálogos"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de catálogos - Campos vacios', { capture: "fullPage" });
  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Administración de catálogos"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    let numero_test = 1;

    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.xpath('//*[@id="name"]')
        .should("be.visible")
        .type("TipoArchivo" + cantidad + "prueba");
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Guardar')]").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Confirmar')]").click();

      cy.wait(tiempo);
      cy.screenshot(' Administración de catálogos - HappyPath', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
    );
    cy.wait(4000);
    cy.get(".route").contains("Catálogos / Administración de catálogos / ");
    cy.wait(4000);
    // BUSCADOR (LISTO)

    cy.get("#mat-input-0").type("png");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de catálogos - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //SWICHES COMPLETOS
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-17-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-27-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de catálogos - Switchs', { capture: "fullPage" });

    //Menu de acciones
    //EDITAR - COMPLETO - REGISTRO  - png
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[8]/td[4]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-new-file/div/div[4]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de catálogos - Editar', { capture: "fullPage" });

    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de catálogos - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_Tipo_de_ArchivosPO;
