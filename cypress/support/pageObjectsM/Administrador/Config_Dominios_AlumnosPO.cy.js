class Config_Dominios_AlumnosPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/domains/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Dominios / Alumnos");
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get("#name").type("prueba cypress v2 ");
    cy.wait(tiempo);
    cy.get("#tenant").type("prueba cypress v2");
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-domain/div/div[6]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Dominios Alumnos - Btn cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/domains/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Dominios / Alumnos");
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Dominios Alumnos - Campos vacios', { capture: "fullPage" });
  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/domains/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Dominios / Alumnos");
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
        .type("prueba cypress " + cantidad);
      cy.wait(1500);
      cy.get("#tenant")
        .should("be.visible")
        .type("prueba cypress " + cantidad);
      cy.wait(1500);
      cy.get("#clientId")
        .should("be.visible")
        .type("prueba cypress " + cantidad);
      cy.wait(1500);

      cy.xpath(
        '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-domain/div/div[6]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.xpath(
        '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
      ).click();
      cy.wait(tiempo);
      cy.screenshot(' Dominios Alumnos - HappyPath', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/domains/student"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Dominios / Alumnos");
    cy.wait(tiempo);

    // BUSCADOR (LISTO)
    cy.get("#mat-input-0").type("axity.com");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Dominios Alumnos - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Dominios Alumnos - Exportar', { capture: "fullPage" });
  }
} //final

export default Config_Dominios_AlumnosPO;
