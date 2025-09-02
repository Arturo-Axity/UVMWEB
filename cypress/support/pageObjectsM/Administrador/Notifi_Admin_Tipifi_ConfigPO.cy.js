class Notifi_Admin_Tipifi_ConfigPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/classifications/settings"
    );
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Nueva')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tipificaciones / Configuración - Btn cancelar ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/notifications/classifications/settings"
    );
    cy.wait(tiempo);

    //Busqueda
    cy.get("#mat-input-0").type("Aclaración de adeudo");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tipificaciones / Configuración - Buscador ', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //Exportar
    cy.xpath("//span[contains(.,'Exportar .xls')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Administración de tipificaciones / Configuración - Exportar ', { capture: "fullPage" });
  }
} //final

export default Notifi_Admin_Tipifi_ConfigPO;
