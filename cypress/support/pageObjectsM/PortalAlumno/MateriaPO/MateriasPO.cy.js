class MateriasPO {
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

  verInscritas(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab1"]').should("have.text", "Inscritas");
    cy.get(
      ":nth-child(2) > :nth-child(1) > ._container_10tm8_5 > ._cardHeader_1ihys_1"
    ).click();
    cy.wait(tiempo);
    cy.screenshot('Materias - Ver Incritas', { capture: "fullPage" });
  }

  inscritasBusqueda(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab1"]').should("have.text", "Inscritas");
    cy.get("[data-testid='Buscar materia-test']").type("INTERNACIONALES");
    cy.wait(tiempo);
    cy.screenshot('Materias - Busqueda Incritas', { capture: "fullPage" });
  }

  verHistorial(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab2"]')
      .should("be.visible")
      .should("have.text", "Historial")
      .click();
    cy.xpath("//span[contains(.,'8vo Grado')]").click();
    cy.wait(tiempo);
    cy.screenshot('Materias - Ver historial', { capture: "fullPage" });
  }

  historialColapsar(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab2"]')
      .should("be.visible")
      .should("have.text", "Historial")
      .click();
    cy.xpath("//span[contains(.,'2do Grado')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'6to Grado')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.screenshot('Materias - Colpasar historial', { capture: "fullPage" });
  }

  historialBusqueda(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab2"]')
      .should("be.visible")
      .should("have.text", "Historial")
      .click();
    cy.wait(tiempo);
    cy.get("[data-testid='Buscar materia-test']").type("Inglés");
    cy.wait(tiempo);
    cy.screenshot('Materias - Busqueda historial', { capture: "fullPage" });
  }

  verMiplan(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab3"]')
      .should("be.visible")
      .should("have.text", "Mi plan")
      .click();
    cy.xpath("//span[contains(.,'1er Grado')]").should("be.visible").click();
    cy.get(
      ":nth-child(3) > :nth-child(1) > ._container_10tm8_5 > ._cardHeader_1ihys_1"
    ).click();
    cy.wait(tiempo);
    cy.screenshot('Materias - Ver mi plan', { capture: "fullPage" });
  }

  miplanColapsar(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab3"]')
      .should("be.visible")
      .should("have.text", "Mi plan")
      .click();
    cy.xpath("//span[contains(.,'2do Grado')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'5to Grado')]").should("be.visible").click();
    cy.wait(tiempo);
    cy.screenshot('Materias - Colapsar mi plan', { capture: "fullPage" });
  }

  miplanBusqueda(t) {
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

    cy.get('[data-testid="item-icon-subjects"]').should("be.visible").click();
    cy.get("._textTitle_t4jyf_30").should("have.text", "Materias");
    cy.wait(tiempo);
    cy.get('[data-testid="tab3"]')
      .should("be.visible")
      .should("have.text", "Mi plan")
      .click();
    cy.wait(tiempo);
    cy.get("[data-testid='Buscar materia-test']").type("Francés");
    cy.wait(tiempo);
    cy.screenshot('Materias - Busqueda mi plan', { capture: "fullPage" });
  }
} //final

export default MateriasPO;
