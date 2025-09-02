class InicioPO {
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

  cambiarCarrera(t) {
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

    cy.get("._contentInfo_13o5f_1").click();
    cy.get('[data-testid="BoxInfoAcademyc"] > ._itemActive_j4txr_9').click();
    cy.wait(tiempo);
    cy.screenshot('Inicio - Cambiar carrera', { capture: "fullPage" });
  }

  tapAgenda(t) {
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

    cy.get('[data-testid="todayDateId"]').click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Agenda");
    cy.wait(tiempo);
    cy.screenshot('Inicio - Tap agenda', { capture: "fullPage" });
  }

  tapAvanceAca(t) {
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

    cy.get("[data-testid='widgetAcademicProgress']").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Avance académico");
    cy.wait(tiempo);
    cy.screenshot('Inicio - Tap avance academico', { capture: "fullPage" });
  }
} //final

export default InicioPO;
