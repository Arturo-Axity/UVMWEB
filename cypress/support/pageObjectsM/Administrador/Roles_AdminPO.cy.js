class Roles_AdminPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Roles / Portal administración");
    cy.wait(tiempo);
    cy.get(".btn-new-rol > .mdc-button__label").click();
    cy.wait(25000);
    cy.get(".ng-untouched").type("hola wold");
    cy.wait(4000);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-create-rol/section/div[2]/button[1]/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Portal administración - Btn cancelar ', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Roles / Portal administración");
    cy.wait(tiempo);
    cy.get(".btn-new-rol > .mdc-button__label").click();
    cy.wait(10000);
    cy.screenshot(' Roles / Portal administración - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Roles / Portal administración");
    cy.wait(tiempo);

    //buscador
    cy.get("#mat-input-0").type("Test");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Portal administración - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[4]/td[5]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(8000);
    cy.screenshot(' Roles / Portal administración - Ver detalle ', { capture: "fullPage" });
    cy.wait(4000);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(4000);

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[4]/td[5]/app-action-buttons/div/div/button[2]/span'
    ).click({ force: true });
    cy.wait(8000);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(4000);
    cy.screenshot(' Roles / Portal administración - Editar ', { capture: "fullPage" });

    // COMPLETO registro Test -- Descomentar en caso de probar Eliminar
    //Eliminar -- Usar el Buscador (Listo)
    /*
        cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr[4]/td[5]/app-action-buttons/div/div/button[3]/span/span').click({force:true})
        cy.wait(tiempo)
        // Boton Confirmar (Lito)
        cy.xpath('//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]').click()
        cy.wait(tiempo)
        */

    // Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Portal administración - Exportar ', { capture: "fullPage" });
  }
} //final

export default Roles_AdminPO;
