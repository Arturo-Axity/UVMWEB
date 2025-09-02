class Usuarios_Usuarios_AdminPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
    );
    cy.wait(tiempo);
    cy.get(".route")
      .contains("Usuarios / Enrolamiento de usuarios / Portal administración")
      .should("be.visible");
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".route")
      .contains(
        "Enrolamiento de usuarios / Portal administración / Enrolar nuevo usuario"
      )
      .should("be.visible");
    cy.wait(13000);
    cy.xpath("//span[contains(.,'Cancelar')]").click();
    cy.wait(tiempo);
    cy.get(".sub-title")
      .contains("Se perderán los cambios realizados, ¿desea continuar?")
      .should("be.visible");
    cy.wait(2500);
    cy.xpath(
      "//span[@class='mdc-button__label'][contains(.,'Confirmar')]"
    ).click();
    cy.wait(tiempo);
    cy.get(".route")
      .contains("Usuarios / Enrolamiento de usuarios / Portal administración")
      .should("be.visible");
    cy.wait(tiempo);
    cy.screenshot(' Enrolamiento de usuarios / Portal administración - Btn cancelar ', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
    );
    cy.wait(tiempo);
    cy.get(".route")
      .contains("Usuarios / Enrolamiento de usuarios / Portal administración")
      .should("be.visible");
    cy.wait(tiempo);
    cy.get(".btn-primary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.get(".route")
      .contains(
        "Enrolamiento de usuarios / Portal administración / Enrolar nuevo usuario"
      )
      .should("be.visible");
    cy.wait(1200);
    cy.xpath(
      "//span[@class='mdc-button__label'][contains(.,'Guardar')]"
    ).click();
    cy.wait(tiempo);
    cy.get(".sub-title")
      .contains(
        "Por favor verifique que haya seleccionado un usuario y asignado roles y campus (solo portal administración)"
      )
      .should("be.visible");
    cy.wait(tiempo);
    cy.screenshot(' Enrolamiento de usuarios / Portal administración - Campos vacios ', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
    );
    cy.wait(tiempo);
    cy.get(".route")
      .contains("Usuarios / Enrolamiento de usuarios / Portal administración")
      .should("be.visible");
    cy.wait(tiempo);
    cy.get("#mat-select-2 > .mat-mdc-select-trigger").click();
    cy.get("#mat-option-63").click();
    cy.wait(tiempo);
    cy.screenshot(' Enrolamiento de usuarios / Portal administración - Filtrar ', { capture: "fullPage" });
  }
} //final

export default Usuarios_Usuarios_AdminPO;
