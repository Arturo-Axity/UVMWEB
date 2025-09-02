/// <reference types='cypress' />
import RecurDigPO from "../../../support/pageObjectsM/PortalAlumno/RecursosDigitalesPO/RecurDigPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new RecurDigPO();
  master.visitHome();

  it(" Recursos Digitales - Búsqueda de biblioteca ", () => {
    master.busquedaBib(2500);
  });

  // it.skip(" Recursos Digitales - Ver documento de la biblioteca configurada ", () => {
  //   cy.visit("/");
  //   cy.xpath(
  //     "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
  //   )
  //     .should("be.visible")
  //     .click({ force: true });
  //   cy.wait(tiempo);
  //   cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
  //     .should("be.visible")
  //     .click();
  //   cy.wait(tiempo);

  //   cy.get("[data-testid='item-icon-digital-resources']")
  //     .should("be.visible")
  //     .click();
  //   cy.get("._textTitle_t4jyf_30").should("have.text", "Recursos digitales");
  //   cy.get(
  //     ":nth-child(2) > [data-testid='arrow'] > [data-testid='svg-container']"
  //   ).click({ force: true });
  //   cy.wait(tiempo);

  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });
});
