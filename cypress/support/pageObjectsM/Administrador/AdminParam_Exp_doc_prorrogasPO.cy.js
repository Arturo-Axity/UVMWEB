class AdminParam_Exp_doc_prorrogasPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/file-types/PRORRG"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Archivos de documento de prorrogas"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    // CANCELAR (LISTO)
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-file/div/div[3]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot('Archivos de documento de prorrogas - Btn Cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/file-types/PRORRG"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Archivos de documento de prorrogas"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot('Archivos de documento de prorrogas - Campos vacios', { capture: "fullPage" });

  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/file-types/PRORRG"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Archivos de documento de prorrogas"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    // DATOS PRINCIPALES EXPEDIENTE(LISTO)
    cy.xpath('//*[@id="mat-select-value-5"]/span').click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="mat-option-5"]/span').click();
    cy.wait(tiempo);
    //GUARDAR
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-file/div/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot('Archivos de documento de prorrogas - HappyPath', { capture: "fullPage" });

  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/file-types/PRORRG"
    );
    cy.wait(2000);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Archivos de documento de prorrogas"
    );
    cy.wait(2000);

    // BUSCADOR (LISTO)
    cy.get("#mat-input-0").type("PDF");
    cy.wait(2000);
    cy.get(".icon-search > img").click();
    cy.wait(2000);
    cy.screenshot('Archivos de documento de prorrogas - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(2000);

    // SWITCHS (LISTO)
    cy.get(
      "#mat-mdc-slide-toggle-11-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow"
    ).click();
    cy.wait(2000);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(2000);
    cy.get(
      "#mat-mdc-slide-toggle-20-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow"
    ).click();
    cy.wait(2000);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(2000);
    cy.screenshot('Archivos de documento de prorrogas - Switchs', { capture: "fullPage" });


    // MENU DE ACCIONES
    // VER EDITAR - Completo -Registro
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[4]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(2000);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-new-file/div/div[4]/button[1]/span[2]'
    ).click();
    cy.wait(2000);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(2000);
    cy.screenshot('Archivos de documento de prorrogas - Ver editar', { capture: "fullPage" });


    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(2000);
    cy.screenshot('Archivos de documento de prorrogas - Exportar', { capture: "fullPage" });

  }
} //final

export default AdminParam_Exp_doc_prorrogasPO;
