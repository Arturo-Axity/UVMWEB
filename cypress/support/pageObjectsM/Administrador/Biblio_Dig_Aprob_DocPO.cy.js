class Biblio_Dig_Aprob_DocPO {
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
      "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/doc-approval"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Bibliotecas digitales / Administración de bibliotecas / Aprobación de documentos"
    );
    cy.wait(tiempo);

    //Export (LISTO)
    cy.get(".btn-icon > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Aprobación de documentos - Exportar', { capture: "fullPage" });


    // ACTUALIZAR BOTON
    cy.get(".btn-update > .mdc-button__label").click();
    cy.wait(tiempo);
    cy.screenshot(' Aprobación de documentos - Btn actualizar', { capture: "fullPage" });

  }
} //final

export default Biblio_Dig_Aprob_DocPO;
