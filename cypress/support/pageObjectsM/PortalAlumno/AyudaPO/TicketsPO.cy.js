class TicketsPO {
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

  ticketsAbiertos(t) {
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

    cy.get('[data-testid="item-icon-assistance"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Centro de ayuda al estudiante"
    );
    cy.wait(tiempo);
    cy.screenshot('Ayuda - Tickets abiertos', { capture: "fullPage" });
  }

  ticketsCerrados(t) {
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

    cy.get('[data-testid="item-icon-assistance"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Centro de ayuda al estudiante"
    );

    cy.wait(tiempo);
    cy.get('[data-testid="closed-tab"]').click();
    cy.wait(tiempo);
    cy.screenshot('Ayuda - Tickets cerrados', { capture: "fullPage" });
  }

  creacionTicket(t) {
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

    cy.get('[data-testid="item-icon-assistance"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Centro de ayuda al estudiante"
    );
    cy.wait(tiempo);

    //Crear ticket tipificación de Aclaración de adeudo
    cy.xpath("//span[contains(.,'Aclaración de adeudo')]").click();
    cy.wait(9000);
    cy.wait(tiempo);

    cy.get('[data-testid="Asunto-test"]').type("Prueba de ticket en Cypress");
    cy.get("textarea").type("Descripcion de mi ticket desde Cypress");
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Tipos de adeudo')]")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//button[contains(.,'Colegiaturas')]").click();
    cy.wait(tiempo);
    cy.xpath("//button[contains(.,'Solicita materia')]").click();
    cy.xpath("//button[contains(.,'No')]").click();
    cy.wait(tiempo);

    cy.get('[data-testid="Etiqueta para depuración numerico 1-test"]').type(
      "1",
      { force: true }
    );

    cy.get('[data-testid="Etiqueta para depuración numerico 2-test"]').type(
      "2",
      { force: true }
    );
    cy.get('[data-testid="Etiqueta para depuración numerico 3-test"]').type(
      "3",
      { force: true }
    );
    cy.get('[data-testid="Etiqueta para depuración numerico 6-test"]').type(
      "4",
      { force: true }
    );
    cy.get('[data-testid="Etiqueta para depuración numerico 7-test"]').type(
      "5",
      { force: true }
    );
    cy.get('[data-testid="Etiqueta para depuración numerico 8-test"]').type(
      "6",
      { force: true }
    );
    cy.get('[data-testid="Etiqueta para depuración numerico 9-test"]').type(
      "7",
      { force: true }
    );
    cy.get('[data-testid="Etiqueta para depuración numerico 10-test"]').type(
      "8",
      { force: true }
    );

    cy.xpath("//span[contains(.,'Catalogo Prueba 1')]").click();
    cy.xpath("//span[contains(.,'Valor1 CAT PRUEBA1')]").click();

    cy.xpath("(//button[contains(.,'Catalogo Prueba 2')])[1]").click();
    cy.xpath("//button[contains(.,'Valor1 CAT PRUEBA2')]").click();

    cy.xpath("//span[contains(.,'Catalogo Prueba 3')]").click();
    cy.xpath("//button[contains(.,'Valor3 CAT PRUEBA3')]").click();

    cy.xpath("(//span[contains(.,'Catalogo Prueba 2')])[2]").click();
    cy.xpath("//span[contains(.,'Valor3 CAT PRUEBA2')]").click();

    cy.xpath("(//span[contains(.,'Catalogo Prueba 2')])[3]").click();
    cy.xpath("//span[contains(.,'Valor2 CAT PRUEBA2')]").click();

    cy.xpath("(//span[contains(.,'Catalogo Prueba 2')])[4]").click();
    cy.get(
      "div > div > div > .DropdownItemButton-sc-19d6u2m-0:nth-child(3) > span"
    ).click();

    cy.xpath("(//span[contains(.,'Catalogo Prueba 2')])[5]").click();
    cy.get(
      "div > div > div > .DropdownItemButton-sc-19d6u2m-0:nth-child(2) > span"
    ).click();

    cy.get('[data-testid="Etiqueta para depuración 2-test"]').type("test", {
      force: true,
    });
    cy.get('[data-testid="Etiqueta para depuración 3-test"]').type("qa", {
      force: true,
    });
    cy.get('[data-testid="Etiqueta para depuración 7-test"]').type("ticket", {
      force: true,
    });
    cy.get('[data-testid="Etiqueta para depuración 8-test"]').type("cypress", {
      force: true,
    });
    cy.get('[data-testid="Etiqueta para depuración 9-test"]').type("nuevo", {
      force: true,
    });
    cy.get('[data-testid="Etiqueta para depuración 10-test"]').type("testing", {
      force: true,
    });

    //subir archivo
    cy.fixture("docs/Evento.pdf").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent,
        fileName: "Evento.pdf",
        mimeType: "application/pdf",
      });
    });
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Continuar')]").click();
    cy.wait(tiempo);
    cy.get('[data-testid="btnSend"]').click();
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Aceptar')]").click();
    cy.wait(9500);

    cy.wait(tiempo);
    cy.screenshot('Ayuda - Creacion ticket', { capture: "fullPage" });
  }

  ticketError(t) {
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

    cy.get('[data-testid="item-icon-assistance"]').click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Centro de ayuda al estudiante"
    );

    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Constancias')]").click();
    cy.wait(9000);
    cy.wait(tiempo);
    cy.get("._title_f21xi_16").should(
      "have.text",
      " Error al generar solicitud "
    );

    cy.wait(tiempo);
    cy.screenshot('Ayuda - Ticket error', { capture: "fullPage" });
  }
} //final

export default TicketsPO;
