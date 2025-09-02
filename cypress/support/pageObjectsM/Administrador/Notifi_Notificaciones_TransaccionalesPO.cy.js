class Notifi_Notificaciones_TransaccionalesPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/transactional"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Notificaciones transaccionales"
    );
    cy.wait(tiempo);
    //Boton Nueva Notificación
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    //Select
    cy.get("#services > .mat-mdc-select-trigger").click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Btn cancelar ', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/transactional"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Notificaciones transaccionales"
    );
    cy.wait(tiempo);
    //Boton Nueva Notificación
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/transactional"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Notificaciones transaccionales"
    );
    cy.wait(tiempo);

    // Buscador
    cy.get("#mat-input-0").type("Aprobación de documento");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Buscador ', { capture: "fullPage" });
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
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-slide-toggle-22-button"]/div[2]/div/div[1]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Switchs ', { capture: "fullPage" });

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[5]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(4000);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-detail-transactional-notification/section/app-breadcrumb-bar/div/button/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Ver detalle ', { capture: "fullPage" });

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[5]/app-action-buttons/div/div/button[2]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Editar ', { capture: "fullPage" });

    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Notificaciones transaccionales - Exportar ', { capture: "fullPage" });
  }
} //final

export default Notifi_Notificaciones_TransaccionalesPO;
