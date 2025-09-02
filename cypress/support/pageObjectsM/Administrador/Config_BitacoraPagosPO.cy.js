class Config_BitacoraPagosPO {
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

  export(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/binnacle/payments"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Bitácora / Pagos");
    cy.wait(3000);

    // Export(LISTO)
    cy.xpath("//span[normalize-space()='Exportar .xls']").click();
    cy.wait(tiempo);
    cy.screenshot(" Bitacora de pagos - Exportar", {
      capture: "fullPage",
    });
  }

  actualizar(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/binnacle/payments"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Bitácora / Pagos");
    cy.wait(3000);

    // actualizar
    cy.xpath("//span[normalize-space()='Actualizar']").click();
    cy.wait(tiempo);
    cy.screenshot(" Bitacora de pagos - Actualizar", {
      capture: "fullPage",
    });
  }

  filtrar(t) {
    let tiempo = t;

    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/settings/binnacle/payments"
    );
    cy.wait(tiempo);
    cy.get(".route").contains("Configuraciones / Bitácora / Pagos");
    cy.wait(3000);

    // filtrar
    cy.xpath("//span[normalize-space()='Filtrar']").click();
    cy.wait(tiempo);
    cy.get("#startAmount").type("100");
    cy.get(".btn-primary > .mdc-button__label").click({ force: true });
    cy.wait(3000);
    cy.screenshot(" Bitacora de pagos - Filtrar", {
      capture: "fullPage",
    });
  }
} //final

export default Config_BitacoraPagosPO;
