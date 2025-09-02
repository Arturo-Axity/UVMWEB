class ConfiguracionPO {
  visitHome() {
    let tiempo = 2500;
    beforeEach(() => {
      cy.login();
      cy.wait(tiempo);
    });
  }

  screenShot(t) {
    let tiempo = t;
    cy.wait(tiempo);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  }

  verDispositivos(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-connected-devices"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Dispositivos conectados"
    );
    cy.wait(tiempo);
    cy.screenshot("Configuracion - Ver dispositivos", { capture: "fullPage" });
  }

  cerrarSesion(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-connected-devices"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Dispositivos conectados"
    );
    cy.wait(tiempo);
    cy.get(":nth-child(1) > ._iconClose_1epxu_24").click();
    cy.wait(tiempo);

    cy.get('[data-testid="modalTitle"]').should(
      "have.text",
      "¿Quieres cerrar sesión?"
    );
    cy.get('[data-testid="btnCloseSession"]').click({ force: true });
    cy.wait(4500);
    cy.screenshot("Configuracion - Cerrar sesion", { capture: "fullPage" });
  }

  cerrarTodas(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-connected-devices"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Dispositivos conectados"
    );
    cy.wait(tiempo);
    cy.get('[data-testid="btnClose"]').click();
    cy.wait(tiempo);

    cy.get('[data-testid="modalTitle"]').should(
      "have.text",
      "¿Quieres cerrar sesión?"
    );
    // cy.get('[data-testid="btnCloseSession"]').click({ force: true });
    cy.wait(4500);
    cy.screenshot("Configuracion - Cerrar todas las sesiones", {
      capture: "fullPage",
    });
  }
} //final

export default ConfiguracionPO;
