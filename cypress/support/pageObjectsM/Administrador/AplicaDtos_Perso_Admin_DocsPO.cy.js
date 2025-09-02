class AplicaDtos_Perso_Admin_DocsPO {
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

  cancelar(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/application/personal-information/admin-docs"
    );
    cy.xpath("//span[contains(.,'Nuevo documento')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot('Administración de documentos - Cancelar', { capture: "fullPage" });

  }

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/application/personal-information/admin-docs"
    );
    cy.xpath("//span[contains(.,'Nuevo documento')]").click();
    cy.wait(tiempo);

    let numero_test = 1;

    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.get("#name")
        .should("be.visible")
        .type("Tipo Doc " + cantidad + " prueba");
      cy.wait(tiempo);

      cy.get(".info").click();
      cy.wait(tiempo);
      cy.get("#mat-mdc-checkbox-1-input").click({ force: true });
      cy.wait(tiempo);
      cy.get(".cdk-overlay-transparent-backdrop").click();
      cy.get("#size").type("4");
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Guardar')]").click();
      cy.wait(2000);
      cy.xpath("//span[contains(.,'Confirmar')]").click();

      cy.wait(2000);
      cy.screenshot('Administración de documentos - HappyPath', { capture: "fullPage" });

    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/application/personal-information/admin-docs"
    );
    //Busqueda
    cy.get("#mat-input-0").type("INE");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot('Administración de documentos - Busqueda', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Filtrar
    cy.xpath("(//div[contains(.,'Todos')])[10]").click();
    cy.wait(tiempo);
    cy.get("#mat-option-14").click();
    cy.wait(tiempo);
    cy.screenshot('Administración de documentos - Filtrar', { capture: "fullPage" });

    //Exportar
    cy.xpath("//span[contains(.,'Exportar .xls')]").click();
    cy.wait(tiempo);
    cy.screenshot('Administración de documentos - Exportar', { capture: "fullPage" });

  }
} //final

export default AplicaDtos_Perso_Admin_DocsPO;
