class AdminParam_Exp_Cat_MultiOrPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/other-origins"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Catálogo otros orígenes"
    );
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Nuevo documento')]").click();
    cy.wait(tiempo);
    cy.get(".mat-mdc-select-placeholder").click();
    cy.xpath("//span[contains(.,'CURP OFF')]").click();

    let numero_test = 1;
    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.get("#origin")
        .should("be.visible")
        .type("GCP" + cantidad + "prueba");
      cy.wait(tiempo);
      cy.get("#originId")
        .should("be.visible")
        .type("IdOrigen" + cantidad + "pruebas");
      cy.wait(tiempo);

      cy.xpath("(//input[@type='text'])[3]").click();
      cy.wait(tiempo);
      cy.xpath("//label[contains(.,'Todos')]").click();

      cy.xpath("//span[contains(.,'Guardar cambios')]").click({
        force: true,
      });
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Confirmar')]").click();
      cy.wait(tiempo);
      cy.screenshot('Catálogo otros orígenes - HappyPath', { capture: "fullPage" });

    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/params/other-origins"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Catálogo otros orígenes"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("Acta");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot('Catálogo otros orígenes - Buscador', { capture: "fullPage" });

    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // Export
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot('Catálogo otros orígenes - Exportar', { capture: "fullPage" });

  }
} //final

export default AdminParam_Exp_Cat_MultiOrPO;
