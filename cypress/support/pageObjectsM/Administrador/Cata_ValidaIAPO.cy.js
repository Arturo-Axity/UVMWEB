class Cata_ValidaIAPO {
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

  happyPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/validation-ia"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Validación IA"
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

      cy.get("#catalogName")
        .should("be.visible")
        .type("DocIA" + cantidad + "prueba");
      cy.wait(tiempo);

      cy.get("#catalogType").click();
      cy.xpath("//mat-option[contains(.,'GET')]").click();

      cy.get("#urlService")
        .should("be.visible")
        .type("www.test" + cantidad + ".com");
      cy.wait(tiempo);

      cy.xpath("//span[contains(.,'Guardar')]").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Confirmar')]").click();

      cy.wait(tiempo);
      cy.screenshot(' Validación IA - HappyPath', { capture: "fullPage" });

    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/validation-ia"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Catálogos / Administración de catálogos / Validación IA"
    );
    cy.wait(tiempo);
    // BUSCADOR (LISTO)
    cy.get("#mat-input-0").type("test");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Validación IA - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(2000);
    cy.screenshot(' Validación IA - Exportar', { capture: "fullPage" });
  }
} //final

export default Cata_ValidaIAPO;
