class AdminParam_Exp_Cat_BannerPO {
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

    cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/params/banner");
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Administración de parámetros / Catálogo banner"
    );
    cy.wait(tiempo);

    // BUSCADOR -
    cy.get("#mat-input-0").type("Acta");
    cy.wait(tiempo);
    cy.get(".icon-search").click();
    cy.wait(tiempo);
    cy.screenshot('Catálogo banner - Buscador', { capture: "fullPage" });
    cy.get("#mat-input-0").clear();
    cy.wait(tiempo);

    //EDITAR - Completo
    cy.xpath(
      '//*[@id="tableCustomer"]/table/tbody/tr[1]/td[4]/app-action-buttons/div/div/button/span/span'
    ).click({ force: true });
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-catalog/div/div[5]/button[1]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.xpath(
      '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
    ).click();
    cy.wait(tiempo);
    cy.screenshot('Catálogo banner - Editar', { capture: "fullPage" });


    // Export(LISTO)
    cy.get(".btn-secondary > .mdc-button__label").click();
    cy.wait(tiempo);

    cy.screenshot('Catálogo banner - Exportar', { capture: "fullPage" });
  }
} //final

export default AdminParam_Exp_Cat_BannerPO;
