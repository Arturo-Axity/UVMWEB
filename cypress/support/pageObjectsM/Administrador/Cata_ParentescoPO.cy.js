class Cata_ParentescoPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parentesco"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="name"]').type("Bisa");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-relationship/div/div[3]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Parentesco - Btn cancelar', { capture: "fullPage" });
  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parentesco"
    );
    cy.wait(tiempo);
    //Boton Agregar Registo Completo
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Parentesco - Campos vacios', { capture: "fullPage" });
  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parentesco"
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
        .type("Parentesco " + cantidad + " prueba");
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Guardar')]").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Confirmar')]").click();

      cy.wait(tiempo);
      cy.screenshot(' Parentesco - HappyPath', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Parentesco"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("Padre");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Parentesco - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //EDITAR - COMPLETO - REGISTRO:Tercero Autorizado
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[3]/td[3]/app-action-buttons/div/div/button[1]/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Parentesco - Editar', { capture: "fullPage" });

    /* // DESCOMENTAR EN CASO DE PROBAR ELIMINAR.
   //Eliminar - Completo - registro:Tio
   cy.get('#mat-input-0').type('Tio')
   cy.wait(tiempo)
   cy.get('.icon-search').click()
   cy.wait(tiempo)
   // xpath boton eliminar (Listo)
   cy.xpath('//*[@id="tableCustomer"]/table/tbody/tr/td[3]/app-action-buttons/div/div/button[2]/span/span').click({force:true})
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
    cy.screenshot(' Parentesco - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_ParentescoPO;
