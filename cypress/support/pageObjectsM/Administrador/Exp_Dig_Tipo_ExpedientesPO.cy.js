class Exp_Dig_Tipo_ExpedientesPO {
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

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Tipos de expedientes"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    // DATOS PRINCIPALES EXPEDIENTE(LISTO)
    cy.get("#nameProceedings").type("exp 1");
    cy.wait(tiempo);
    // CANCELAR
    cy.get(".ml-1 > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Btn cancelar ', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Tipos de expedientes"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    //GUARDAR
    cy.get(".box-buttons > .ml-3 > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Campos vacios ', { capture: "fullPage" });
  }

  happyPath(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Tipos de expedientes"
    );
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);

    // DATOS PRINCIPALES EXPEDIENTE(LISTO)
    cy.get("#mat-radio-3-input").click();
    cy.wait(tiempo);

    let numero_test = 1;
    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.get("#nameProceedings")
        .should("be.visible")
        .type("Exp Cy " + cantidad + " prueba");
      cy.wait(1500);

      cy.get("#mat-input-1").type("arturo lopez velazquez");
      cy.wait(1500);
      cy.wait(tiempo);
      cy.get(".icon-search").click();
      cy.wait(3000);
      cy.get("#mat-option-7").click();
      cy.wait(1500);
      cy.get(
        ".content-search-table > .container-search > .btn-add > .ml-3 > .mdc-button__label"
      ).click();
      cy.wait(1500);

      cy.get("#descProceedings")
        .should("be.visible")
        .type("Exp Descripcion " + cantidad + " prueba");
      cy.wait(1500);

      cy.xpath(
        '//*[@id="mat-tab-content-0-0"]/div/div/app-search-docs-collapse/div/div[1]/div[1]/app-auto-complete-checks-optim/form/div/div/mat-icon'
      ).click({ force: true });
      cy.wait(tiempo);
      cy.get('[aria-describedby="cdk-describedby-message-ng-1-13"]').click({ force: true });
      cy.wait(tiempo);
      cy.get(".cdk-overlay-backdrop").click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-tab-content-0-0"]/div/div/app-search-docs-collapse/div/div[1]/div[2]/button/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.get("#isRequired > .mat-mdc-select-trigger").click();
      cy.wait(tiempo);
      cy.get("#mat-option-8").click();
      cy.wait(tiempo);
      cy.get("#isRequiredInPhysical > .mat-mdc-select-trigger").click();
      cy.wait(tiempo);
      cy.get("#mat-option-10").click();
      cy.wait(tiempo);
      cy.get("#iaValidation > .mat-mdc-select-trigger").click();
      cy.wait(tiempo);
      cy.get("#mat-option-13").click();
      cy.wait(tiempo);
      cy.get('#ticketGenerate > .mat-mdc-select-trigger').click()
      cy.wait(tiempo);
      cy.get('#mat-option-15').click()
      cy.wait(tiempo);
      cy.get("#expirationDays").type("3");
      cy.wait(tiempo);

      //BOTON GUARDAR
      cy.xpath(
        "/html/body/app-root/section/div/div[2]/app-new-file/section/div/div[4]/div/button[2]/span[2]"
      ).click();

      cy.wait(tiempo);
      cy.screenshot(' Tipos de expedientes - HappyPath ', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types/");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de expedientes / Tipos de expedientes"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("Genera");
    cy.wait(tiempo);
    cy.get(".icon-search > img").click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // SWITCHS
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-15-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-25-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Switchs ', { capture: "fullPage" });

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[8]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Tipos de expedientes / Detalle de tipo de expediente"
    );
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Ver detalle ', { capture: "fullPage" });
    cy.wait(tiempo);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(tiempo);

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[8]/app-action-buttons/div/div/button[2]/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Tipos de expedientes / Editar tipo de expediente"
    );
    cy.wait(tiempo);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-new-file/section/div/div[4]/div/button[1]/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-2"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Editar ', { capture: "fullPage" });

    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Tipos de expedientes - Exportar ', { capture: "fullPage" });
  }
} //final

export default Exp_Dig_Tipo_ExpedientesPO;
