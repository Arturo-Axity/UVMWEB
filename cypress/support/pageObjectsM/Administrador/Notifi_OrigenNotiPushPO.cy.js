class Notifi_OrigenNotiPushPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/origins-push"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Origen notificación push"
    );
    cy.wait(tiempo);
    //Boton Nuevo origen notificacion push
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);

    let numero_test = 1;

    for (let num = 1; num <= numero_test; num++) {
      let estadoArr = ["1: 1", "3:13", "5:32"];
      let Ramdom_estado =
        estadoArr[Math.floor(Math.random() * estadoArr.length)];
      let cantidad = Math.floor(Math.random() * 3000);

      cy.get("#CVE").should("be.visible").type("Clave Cy");
      cy.wait(tiempo);

      cy.get("#NAME")
        .should("be.visible")
        .type("OriNot " + cantidad + " p");
      cy.wait(tiempo);

      cy.xpath("//span[contains(.,'Guardar')]").click();
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Confirmar')]").click();
      cy.wait(tiempo);
      cy.screenshot(' Origen notificación push - HappyPath ', { capture: "fullPage" });

    }
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/admin/origins-push"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Notificaciones / Administración de notificaciones / Origen notificación push"
    );
    cy.wait(tiempo);

    // Buscador
    cy.get("#mat-input-0").type("Prueba");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Origen notificación push - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Exportar
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Origen notificación push - Exportar ', { capture: "fullPage" });
  }
} //final

export default Notifi_OrigenNotiPushPO;
