class BoletaPO {
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

  boletaPromedio(t) {
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

    cy.get('[data-testid="item-icon-report-card"]').click();
    cy.get("._titlePage_1uzvn_1").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(4500);
    cy.screenshot("Boleta de calificaciones - Promedio General", {
      capture: "fullPage",
    });
  }

  boletaDetalle(t) {
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

    cy.get('[data-testid="item-icon-report-card"]').click();
    cy.get("._titlePage_1uzvn_1").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(tiempo);
    cy.get('[data-testid="CardInteractiveContainer"]')
      .should("be.visible")
      .click();
    cy.wait(4500);
    cy.screenshot("Boleta de calificaciones - Detalle", {
      capture: "fullPage",
    });
  }

  mensajeSinCalifMateria(t) {
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

    cy.get('[data-testid="item-icon-report-card"]').click();
    cy.get("._titlePage_1uzvn_1").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(tiempo);
    cy.get('[data-testid="CardInteractiveContainer"]')
      .should("be.visible")
      .click();
    cy.wait(tiempo);
    cy.get("._titlePage_1uzvn_1").should("have.text", "Ciclo actual");
    cy.wait(tiempo);
    cy.get("._emptyStateTitle_1bp0n_15").should(
      "have.text",
      " Sin registro de calificaciones "
    );
    cy.wait(4500);

    cy.screenshot(
      "Boleta de calificaciones - Sin registo de calificaciones o materias",
      {
        capture: "fullPage",
      }
    );
  }

  boletaDescarga(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic En Administracion')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-report-card"]').click();
    cy.get("._titlePage_1uzvn_1").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(tiempo);
    cy.get('[data-testid="CardInteractiveContainer"]')
      .should("be.visible")
      .click();
    cy.wait(tiempo);
    cy.get("._titlePage_1uzvn_1").should("have.text", "Ciclo actual");
    cy.wait(tiempo);
    cy.get("._finalScoreWebButtonText_zve8t_42").should("be.visible").click();
    cy.wait(4500);

    cy.screenshot("Boleta de calificaciones - Descarga Boleta", {
      capture: "fullPage",
    });
  }
} //final

export default BoletaPO;
