class Usuarios_Admin_de_TutoresPO {
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

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin");
    cy.wait(tiempo);
    cy.get(".route").contains("Usuarios / Tutores / Administración de tutores");
    cy.wait(tiempo);
    //Boton Nuevo Tutor
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="name"]').type("Marcelo");
    cy.wait(tiempo);
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tutores - Btn cancelar ', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin");
    cy.wait(tiempo);
    cy.get(".route").contains("Usuarios / Tutores / Administración de tutores");
    cy.wait(tiempo);
    //Boton Nuevo Tutor
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tutores - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin");
    cy.wait(tiempo);
    cy.get(".route").contains("Usuarios / Tutores / Administración de tutores");
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("Arturo");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tutores - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // VER DETALLE
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[2]/td[6]/app-action-buttons/div/div/button[1]/span/span'
    ).click({ force: true });
    cy.wait(4000);
    cy.screenshot(' Administración de tutores - Ver detalle ', { capture: "fullPage" });
    cy.wait(4000);
    cy.get(".btn-back > .mdc-button__label").click();
    cy.wait(tiempo);

    //EDITAR
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[6]/app-action-buttons/div/div/button[2]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tutores - Editar ', { capture: "fullPage" });

    /*
  // COMPLETO
  //Eliminar -- Usar el Buscador (Listo) -- registro URBANO -- DECOMENTAR CUANDO SE EJECUTE LA OPCION ELIMINAR CON DICHO REGISTRO.
 cy.get('#mat-input-3').type('Urbano')
 cy.wait(tiempo)
 cy.get('.icon-search').click()
 cy.wait(tiempo)
 // xpath boton eliminar (Listo)
 cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr/td[6]/app-action-buttons/div/div/button[3]/span').click({force:true})
 cy.wait(tiempo)
  // Boton Confirmar (Lito)
  cy.xpath('//*[@id="mat-mdc-dialog-3"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]').click()
  cy.wait(tiempo)
  cy.get('#mat-input-3').clear()
  cy.wait(tiempo)
 */
    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tutores - Exportar ', { capture: "fullPage" });
  }
} //final

export default Usuarios_Admin_de_TutoresPO;
