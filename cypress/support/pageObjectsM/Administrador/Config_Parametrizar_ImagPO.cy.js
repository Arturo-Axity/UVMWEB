class Config_Parametrizar_ImagPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/images/parameterize"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Configuraciones / Administración de imágenes / Parametrizar imágenes"
    );
    cy.wait(tiempo);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-images/section/div[2]/button[1]/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.get("#section > .mat-mdc-select-trigger").click();
    cy.wait(tiempo);
    cy.xpath('//*[@id="mat-option-5"]/span').click();
    cy.wait(tiempo);
    cy.get(".content-modal-template-param > .laureate-icon").click();
    cy.wait(tiempo);
    cy.screenshot(' Parametrizar imágenes - Btn cancelar', { capture: "fullPage" });

  }

  camposVacios(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/images/parameterize"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Configuraciones / Administración de imágenes / Parametrizar imágenes"
    );
    cy.wait(tiempo);
    cy.xpath(
      "/html/body/app-root/section/div/div[2]/app-images/section/div[2]/button[1]/span[2]"
    ).click();
    cy.wait(tiempo);
    cy.screenshot(' Parametrizar imágenes - Campos vacios', { capture: "fullPage" });
  }

  otros(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/images/parameterize"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Configuraciones / Administración de imágenes / Parametrizar imágenes"
    );
    cy.wait(tiempo);

    // BUSCADOR
    cy.get("#mat-input-0").type("Onboarding");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot(' Parametrizar imágenes - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    // Export(LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click;
    cy.wait(tiempo);
    cy.screenshot(' Parametrizar imágenes - Exportar', { capture: "fullPage" });
  }
} //final

export default Config_Parametrizar_ImagPO;
