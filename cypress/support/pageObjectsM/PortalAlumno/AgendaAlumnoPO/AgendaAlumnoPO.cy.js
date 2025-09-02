class AgendaAlumnoPO {
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

  filtrar(t) {
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

    cy.get('[data-testid="item-icon-student-agenda"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Agenda");
    cy.wait(tiempo);

    cy.get('[data-testid="buttonFilterId"]').should("be.visible").click();
    cy.get(
      '[data-testid="checkboxItemAgenda0"] > [data-testid="checkbox-box-test-id"]'
    ).click(); //horario
    cy.get('[data-testid="buttonSaveFilters"]').click(); // botón guardar
    cy.wait(tiempo);
    cy.screenshot('Agenda - Filtrar', { capture: "fullPage" });
  }

  verAgenda(t) {
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

    cy.get('[data-testid="item-icon-student-agenda"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Agenda");
    cy.wait(tiempo);

    cy.xpath("//button[contains(.,'Día')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.xpath("//button[contains(.,'Mes')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.xpath("//button[contains(.,'Año')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.screenshot('Agenda - Ver agenda', { capture: "fullPage" });

  }

  navegarAgenda(t) {
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

    cy.get('[data-testid="item-icon-student-agenda"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Agenda");
    cy.wait(tiempo);

    cy.get(".imgPrevWeek").click();
    cy.wait(tiempo);
    cy.get(".imgNextWeek").click();
    cy.wait(tiempo);
    cy.screenshot('Agenda - Navegacion', { capture: "fullPage" });
  }

  detalle(t) {
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

    cy.get('[data-testid="item-icon-student-agenda"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Agenda");
    cy.wait(tiempo);

    cy.xpath(
      "//div[@class='title-appointment'][contains(.,'Prácticas Profesionales')]"
    ).click({ force: true });
    cy.wait(tiempo);
    cy.screenshot('Agenda - Detalle', { capture: "fullPage" });
  }
} //final

export default AgendaAlumnoPO;
