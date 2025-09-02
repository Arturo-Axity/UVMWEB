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

  boletaPresencial(t) {
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
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(4500);
    cy.screenshot('Boleta de calificaciones - Boleta presencial', { capture: "fullPage" });
  }

  presencialFiltrado(t) {
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
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Boleta de calificaciones"
    );

    cy.get('[style="position: relative;"] > button').click();
    cy.xpath("//span[contains(.,'Ciclo 20223')]").click();
    cy.wait(tiempo);
    cy.screenshot('Boleta de calificaciones - Filtrado presencial', { capture: "fullPage" });
  }

  descargaPresencial(t) {
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
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(4500);
    cy.xpath("//span[contains(.,'Descargar boleta')]").click();

    cy.wait(4500);
    cy.screenshot('Boleta de calificaciones - Descarga Boleta presencial', { capture: "fullPage" });
  }

  boletaEnlinea(t) {
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
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(tiempo);
    cy.xpath("//button[contains(.,'En línea')]").click();
    cy.wait(tiempo);
    cy.screenshot('Boleta de calificaciones - Boleta en linea', { capture: "fullPage" });
  }

  enlineaFiltrado(t) {
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
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(tiempo);

    cy.xpath("//button[contains(.,'En línea')]").click();
    cy.get('[style="position: relative;"] > button').click();
    cy.xpath("(//span[contains(.,'Ciclo 20231')])[2]").click();
    cy.wait(tiempo);
    cy.screenshot('Boleta de calificaciones - Filtrado Boleta en linea', { capture: "fullPage" });
  }

  descargaEnlinea(t) {
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
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Boleta de calificaciones"
    );
    cy.wait(tiempo);

    cy.xpath("//button[contains(.,'En línea')]").click();

    cy.wait(4500);
    cy.xpath("//span[contains(.,'Descargar boleta')]").click();
    cy.wait(4500);
    cy.screenshot('Boleta de calificaciones - Descarga de Boleta en linea', { capture: "fullPage" });
  }
} //final

export default BoletaPO;
