class Exp_Dig_AsignaExp_ProcesoPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/file/assignment/shipping"
    );
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Nuevo envío')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Procesos de asignaciones masivas - Btn cancelar ', { capture: "fullPage" });

  }

  happrPath(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/assignment/shipping"
    );
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Nuevo envío')]").click();
    cy.wait(tiempo);

    let numero_test = 1;
    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.get("#name")
        .should("be.visible")
        .type("Proceso Asig " + cantidad + " prueba");
      cy.wait(1500);

      cy.get(".info").click();
      cy.get("#mat-mdc-checkbox-1-input").click({ force: true });
      cy.get(".cdk-overlay-transparent-backdrop").click();
      cy.get("#mat-input-1").type("exp");
      cy.wait(tiempo);
      cy.xpath("(//img[contains(@alt,'icon_search')])[2]").click();
      cy.wait(5000);
      cy.get("#mat-option-6").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Agregar')]").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Guardar')]").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Confirmar')]").click();

      cy.wait(tiempo);
      cy.screenshot(' Procesos de asignaciones masivas - HappyPath ', { capture: "fullPage" });
    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/assignment/shipping"
    );
    cy.wait(tiempo);

    //Busqueda
    cy.get("#mat-input-0").type("test");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Procesos de asignaciones masivas - Busqueda ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Filtrar
    cy.xpath("(//span[contains(.,'Todos')])[2]").click();
    cy.wait(tiempo);
    cy.get("#mat-option-19").click();
    cy.wait(tiempo);
    cy.screenshot(' Procesos de asignaciones masivas - Filtrar ', { capture: "fullPage" });

    //Exportar
    cy.xpath("//span[contains(.,'Exportar .xls')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Procesos de asignaciones masivas - Exportar ', { capture: "fullPage" });
  }
} //final

export default Exp_Dig_AsignaExp_ProcesoPO;
