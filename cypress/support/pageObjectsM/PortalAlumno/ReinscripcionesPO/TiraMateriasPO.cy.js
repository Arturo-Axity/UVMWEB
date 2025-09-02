class TiraMateriasPO {
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

  verTiraMaterias(t) {
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

    cy.get('[data-testid="item-icon-subject-strip"]').click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Tira de materias");
    cy.wait(tiempo);
    cy.screenshot(' Tira de materias ', { capture: "fullPage" });
  }

  detalleMateria(t) {
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

    cy.get('[data-testid="item-icon-subject-strip"]').click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Tira de materias");
    cy.xpath("(//span[contains(.,'PRÁCTICAS PROFESIONALES')])[1]").click();
    cy.wait(tiempo);
    cy.screenshot(' Tira de materias - Ver detalle', { capture: "fullPage" });
  }

  descargaTiraMateria(t) {
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

    cy.get('[data-testid="item-icon-subject-strip"]').click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Tira de materias");
    cy.wait(tiempo);
    cy.get('[data-testid="btnDownloadStrip"]').click();
    cy.wait(tiempo);
    cy.screenshot(' Tira de materias - Descargar', { capture: "fullPage" });
  }
} //final

export default TiraMateriasPO;
