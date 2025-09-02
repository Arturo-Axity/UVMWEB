class Exp_Dig_Admin_DocumentosPO {
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

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Administración de documentos"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get("#name").type("Doc110723");
    cy.wait(tiempo);
    cy.get("#nomenclature").type("PRUEBA - _  23");
    cy.wait(tiempo);
    // Confirmaciones
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-doc/section/div[2]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de documentos - Btn cancelar', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Administración de documentos"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de documentos - Campos vacios', { capture: "fullPage" });
  }

  happyPath(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Administración de documentos"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);

    let numero_test = 1;
    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.get("#name")
        .should("be.visible")
        .type("N Doc " + cantidad + " prueba");
      cy.wait(1500);

      cy.get("#nomenclature")
        .should("be.visible")
        .type("Nomencla " + cantidad + " prueba");
      cy.wait(1500);

      cy.get(".mat-select-arrow-custom").click();
      cy.wait(tiempo);
      cy.xpath('//*[@id="mat-mdc-checkbox-1-input"]').click();
      cy.wait(tiempo);
      cy.xpath("/html/body/div[3]/div[3]").click({ force: true });
      cy.wait(tiempo);
      cy.get("#sizeFile").type("4");
      cy.wait(tiempo);

      cy.get("#originSystem")
        .should("be.visible")
        .type("OriSys " + cantidad + " p");
      cy.wait(1500);

      cy.get("#originId")
        .should("be.visible")
        .type("OrID " + cantidad + " p");
      cy.wait(1500);

      cy.get("#description")
        .should("be.visible")
        .type("Descrpcion " + cantidad + " prueba");
      cy.wait(1500);

      cy.xpath("//span[contains(.,'Selecciona una opción')]").click();
      cy.xpath("//span[contains(.,'test_DNLD_0624')]").click();
      // Confirmaciones
      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-doc/section/div[2]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.screenshot(' Administración de documentos - HappyPath', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Administración de documentos"
    );
    cy.wait(tiempo);

    // BUSCADOR (LISTO)
    cy.get("#mat-input-0").type("CURP");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de documentos - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // SWITCHS (LISTO)
    cy.get(
      "#mat-mdc-slide-toggle-12-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(4000);

    cy.get(
      "#mat-mdc-slide-toggle-22-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(4000);
    cy.screenshot(' Administración de documentos - Switchs', { capture: "fullPage" });

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[6]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Administración de documentos / Detalle de documento digital"
    );
    cy.wait(tiempo);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-view-detail/section/app-breadcrumb-bar/div/button/span[2]"
    ).click();
    cy.wait(4000);
    cy.screenshot(' Administración de documentos - Ver detalle', { capture: "fullPage" });

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[6]/app-action-buttons/div/div/button[2]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-new-doc/section/div[2]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de documentos - Editar', { capture: "fullPage" });

    /*  -- descomentar en caso de eliminar registro
//Eliminar -- Usar el Buscador (Listo)
cy.get('#mat-input-1').type('Doc 1')
cy.wait(tiempo)
cy.get('.icon-search').click()
cy.wait(tiempo)
// xpath boton eliminar (Listo)
cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr/td[6]/app-action-buttons/div/div/button[3]/span/span').click({force:true})
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
    cy.screenshot(' Administración de documentos - Exportar', { capture: "fullPage" });
  }
} //final

export default Exp_Dig_Admin_DocumentosPO;
