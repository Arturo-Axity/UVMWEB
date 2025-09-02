class Notifi_Plantillas_WhatsappPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/whatsapp"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Plantillas Whatsapp"
    );
    cy.wait(tiempo);
    //Boton Nueva Plantilla
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="nameTemplate"]').type("Plantilla");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-template/div/div[7]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Plantillas Whatsapp - Btn cancelar ', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/whatsapp"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Plantillas Whatsapp"
    );
    cy.wait(tiempo);
    //Boton Nueva Plantilla
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="nameTemplate"]').type("Plantilla");
    cy.wait(tiempo);
    cy.screenshot(' Plantillas Whatsapp - Campos vacios ', { capture: "fullPage" });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-template/div/div[7]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);

  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/whatsapp"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Plantillas Whatsapp"
    );
    cy.wait(tiempo);
    //Boton Nueva Plantilla
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);

    let numero_test = 1;

    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.xpath('//*[@id="nameTemplate"]')
        .should("be.visible")
        .type("Plantilla Cypress " + cantidad + " prueba");
      cy.wait(tiempo);

      cy.xpath('//*[@id="channel"]').type("30");
      cy.wait(tiempo);
      cy.xpath('//*[@id="idTemplate"]').type(
        "e88235f3_cc41_4c49_95a1_d1a12ec0af44:uvm_alum_atenalum_notificacion_01:es_MX"
      );
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-template/div/div[6]/app-indicator-input/form/div/div[1]/div/input'
      ).type("5531122610");
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-template/div/div[6]/app-indicator-input/form/div/div/button/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-template/div/div[7]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.screenshot(' Plantillas Whatsapp - HappyPath ', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/whatsapp"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Plantillas Whatsapp"
    );
    cy.wait(tiempo);

    // Buscador (listo)
    cy.get("#mat-input-0").type("Plantilla 2 BD");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Plantillas Whatsapp - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[5]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.screenshot(' Plantillas Whatsapp - Ver detalle ', { capture: "fullPage" });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[5]/app-action-buttons/div/div/button[2]/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Plantillas Whatsapp - Editar ', { capture: "fullPage" });

    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Plantillas Whatsapp - Exportar ', { capture: "fullPage" });
  }
} //final

export default Notifi_Plantillas_WhatsappPO;
