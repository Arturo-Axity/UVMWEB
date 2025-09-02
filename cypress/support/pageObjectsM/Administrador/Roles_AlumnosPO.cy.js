class Roles_AlumnosPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Roles / Alumnos");
    cy.wait(tiempo);
    cy.get(".btn-new-rol > .mdc-button__label").click();
    cy.wait(25000);
    cy.xpath("//input[contains(@placeholder,'Nombre del nuevo rol')]").type(
      "hola wold"
    );
    cy.wait(4000);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-create-rol/section/div[2]/button[1]/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Alumnos - Btn cancelar ', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Roles / Alumnos");
    cy.wait(tiempo);
    cy.get(".btn-new-rol > .mdc-button__label").click();
    cy.wait(25000);
    cy.screenshot(' Roles / Alumnos - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Catálogos / Roles / Alumnos");
    cy.wait(tiempo);
    // BUSCADOR
    cy.get("#mat-input-0").type("test");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Alumnos - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // VER DETALLE
    cy.xpath(
      '//tbody/tr[1]/td[5]/app-action-buttons[1]/div[1]/button[1]/span[3]'
    ).click({ force: true });
    cy.wait(4000);
    cy.get('[mat-dialog-close="details"] > .mdc-button__label > span').click()
    cy.wait(12000);
    cy.screenshot(' Roles / Alumnos - Ver detalle ', { capture: "fullPage" });
    cy.wait(4000);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(4000);

    //EDITAR
    cy.xpath(
      '//tbody/tr[1]/td[5]/app-action-buttons[1]/div[1]/button[1]/span[3]'
    ).click({ force: true });
    cy.wait(4000);
    cy.get('[mat-dialog-close="edit"] > .mdc-button__label > span').click();
    cy.wait(3000);
    cy.get('.ml-3 > .mdc-button__label').click();
    cy.wait(3000);
    cy.xpath("//span[contains(.,'Confirmar')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Alumnos - Editar ', { capture: "fullPage" });

    // COMPLETO  - DESCOMENTAR EN CASO DE PROBAR ELIMINAR
    //Eliminar -- Usar el Buscador (Listo)
    // cy.xpath(
    //   '//*[@id="tableCustomer"]/table/tbody/tr/td[5]/app-action-buttons/div/div/button[3]/span'
    // ).click({ force: true });
    // cy.wait(tiempo);
    // // Boton Confirmar (Lito)
    // cy.xpath(
    //   '//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    // ).click();
    // cy.wait(tiempo);

    //Exportar
    cy.xpath("//span[contains(.,'Exportar .xls')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Roles / Alumnos - Exportar ', { capture: "fullPage" });
  }
} //final

export default Roles_AlumnosPO;
