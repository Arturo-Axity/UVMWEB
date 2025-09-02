class AvanceAcaPO {
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

  tarjetas(t) {
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

    cy.get('[data-testid="item-icon-academic-progress"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Avance académico");
    cy.xpath("//span[contains(.,'Ciclo escolar')]")
      .should("be.visible")
      .should("have.text", "Ciclo escolar");
    cy.xpath("//span[contains(.,'Créditos acumulados')]")
      .should("be.visible")
      .should("have.text", "Créditos acumulados");
    cy.get('[data-testid="boxCardAvarage"] > :nth-child(1) > span')
      .should("be.visible")
      .should("have.text", "Promedio");
    cy.get('[data-testid="boxCardAvarage"] > :nth-child(1) > span')
      .should("be.visible")
      .should("have.text", "Promedio");
    cy.get("._contentTitle_1hef7_7 > span").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.screenshot('Avance academico - Tarjeta', { capture: "fullPage" });
  }

  tapMaterias(t) {
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

    cy.get('[data-testid="item-icon-academic-progress"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Avance académico");
    cy.get("._contentHeader_1hef7_1").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.screenshot('Avance academico - Tap materias', { capture: "fullPage" });
  }
} //final

export default AvanceAcaPO;
