class EstadoCuentaPO {
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

  verEstado(t) {
    let tiempo = t;
    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[contains(.,'Lic En Fisioterapia')])[1]").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - Ver estado', { capture: "fullPage" });
  }

  verPagos7(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[normalize-space()='Lic En Diseño Multimedia']").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);
    cy.get(".ButtonWrapper-sc-bjlgs8-0").click({ force: true });
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - Ver pagos Banner 7', { capture: "fullPage" });
  }

  verPagos9(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[normalize-space()='Lic En Derecho']").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);
    cy.get(".ButtonWrapper-sc-bjlgs8-0").click({ force: true });
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - Ver pagos Banner 9', { capture: "fullPage" });
  }

  historialPagos(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[contains(.,'Lic En Fisioterapia')])[1]").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'COLEGIATURA/PARC  2  NC')]").click();
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - Historial de pagos', { capture: "fullPage" });
  }

  historialFiltrado(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[contains(.,'Lic En Fisioterapia')])[1]").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);

    cy.get('[data-testid="filterId"]').click();
    cy.xpath("(//div[contains(.,'Últimos 3 meses')])[6]").click();
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - Filtrar historial de pagos ', { capture: "fullPage" });
  }

  metodosPago(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[normalize-space()='Lic En Diseño Multimedia']").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);
    cy.get(".ButtonWrapper-sc-bjlgs8-0").click({ force: true });
    cy.wait(tiempo);
    cy.get(".MuiTypography-root").click();
    cy.xpath("//span[contains(.,'Continuar')]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Resumen de pago");
    cy.xpath("(//span[contains(.,'Pagar')])[2]").click();
    cy.wait(tiempo);
    cy.get(
      "._paymentSelection_154qa_1 > ._contentBreadcrumb_t4jyf_1 > ._contentTitle_t4jyf_19 > ._titleContainer_t4jyf_25 > ._textTitle_t4jyf_30"
    ).should("have.text", "Elige tu método de pago");
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - Metodos de pago ', { capture: "fullPage" });
  }

  codi(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[normalize-space()='Lic En Diseño Multimedia']").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("(//span[contains(.,'Estado de cuenta')])[2]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Estado de cuenta");
    cy.wait(tiempo);
    cy.get(".ButtonWrapper-sc-bjlgs8-0").click({ force: true });
    cy.wait(tiempo);
    cy.get(':nth-child(2) > ._centerLabels_1yunh_8 > ._primaryLabel_1yunh_13').click();
    cy.xpath("//span[contains(.,'Continuar')]").click();
    cy.wait(tiempo);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Resumen de pago");
    cy.xpath("(//span[contains(.,'Pagar')])[2]").click();
    cy.wait(tiempo);
    cy.get(
      "._paymentSelection_154qa_1 > ._contentBreadcrumb_t4jyf_1 > ._contentTitle_t4jyf_19 > ._titleContainer_t4jyf_25 > ._textTitle_t4jyf_30"
    ).should("have.text", "Elige tu método de pago");
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Codi')]").click();
    cy.wait(3500);
    cy.get("._textTitle_t4jyf_30").should("have.text", "Codi");
    cy.wait(tiempo);
    cy.screenshot('Estado de cuenta - CoDi ', { capture: "fullPage" });
  }

  verReferencia(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[contains(.,'Lic En Fisioterapia')])[1]").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.wait(tiempo);
    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.xpath("//span[contains(.,'Referencia bancaria')]").click();
    cy.wait(5500);
    cy.screenshot('Estado de cuenta - Referencia de pago ', { capture: "fullPage" });
  }

  descargaReferencia(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//span[contains(.,'Lic En Fisioterapia')])[1]").click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-payments-and-statement-account"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Pagos y estado de cuenta"
    );
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Referencia bancaria')]").click();
    cy.wait(5500);

    cy.get("._textTitle_t4jyf_30").should("have.text", "Referencia de pago");
    cy.wait(tiempo);
    cy.get('[data-testid="btnDownloadReference"]').click();
    cy.wait(3500);
    cy.screenshot('Estado de cuenta - Descarga de referencia de pago', { capture: "fullPage" });
  }
} //final

export default EstadoCuentaPO;
