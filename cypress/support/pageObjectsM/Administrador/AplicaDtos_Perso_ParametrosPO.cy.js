class AplicaDtos_Perso_ParametrosPO {
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

  checks(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/application/personal-information/params"
    );
    cy.wait(tiempo);
    cy.get("#mat-mdc-checkbox-2-input").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot('Datos personales Parámetros - Checks', { capture: "fullPage" });

  }

  editar(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/application/personal-information/params"
    );
    cy.wait(tiempo);
    cy.get(
      ":nth-child(1) > .body > app-action-buttons > .dropdown > .btn-edit > .mat-mdc-button-touch-target"
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[contains(.,'Editar')])[2]").click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[normalize-space()='Cancelar'])[2]").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Confirmar')]").click();
    cy.wait(tiempo);
    cy.screenshot('Datos personales Parámetros - Editar', { capture: "fullPage" });
  }

  navegar(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/application/personal-information/params"
    );
    cy.wait(tiempo);
    cy.get("#mat-tab-label-0-1 > .mdc-tab__content").click();
    cy.wait(tiempo);
    cy.get("#mat-tab-label-0-2 > .mdc-tab__content").click();
    cy.wait(tiempo);
    cy.get("#mat-tab-label-0-3 > .mdc-tab__content").click();
    cy.wait(tiempo);
    cy.get("#mat-tab-label-0-4 > .mdc-tab__content").click();
    cy.wait(tiempo);
    cy.get("#mat-tab-label-0-5 > .mdc-tab__content").click();
    cy.wait(tiempo);
    cy.screenshot('Datos personales Parámetros - Navegación', { capture: "fullPage" });

  }
} //final

export default AplicaDtos_Perso_ParametrosPO;
