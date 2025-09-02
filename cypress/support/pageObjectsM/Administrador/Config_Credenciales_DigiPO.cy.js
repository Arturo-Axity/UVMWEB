class Config_Cedenciales_DigiPO {
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

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/credential/config"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Configuraciones / Credencial Digital / Configuración"
    );
    cy.wait(tiempo);

    // BUSCADOR (LISTO
    cy.get("#mat-input-0").type("AGUASCALIENTES");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Credencial Digital / Configuración - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // SWITCHS (LISTO)
    cy.get('#mat-mdc-slide-toggle-170-button > .mdc-switch__handle-track > .mdc-switch__handle > .mdc-switch__shadow').click();
    cy.wait(tiempo);
    cy.xpath("//span[normalize-space()='Confirmar']").click()
    cy.wait(tiempo);
    cy.screenshot(' Credencial Digital / Configuración - Switchs', { capture: "fullPage" });

    //Export (LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Credencial Digital / Configuración - Exportar', { capture: "fullPage" });

  }
} //final

export default Config_Cedenciales_DigiPO;
