/// <reference types='cypress' />
// import "cypress-file-upload";
import ExpedienteDPO from "../../../support/pageObjectsM/PortalAlumno/ExpedientesPO/ExpedienteDPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new ExpedienteDPO();
  master.visitHome();

  it(" Expedientes Digitales - Ver expedientes ", () => {
    master.verExpedientes(2500);
  });

  // it.skip(" Expedientes Digitales - Cargar Documento ", () => {
  // cy.visit("/");
  // cy.xpath(
  //   "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
  // )
  //   .should("be.visible")
  //   .click({ force: true });
  // cy.wait(tiempo);
  // cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
  //   .should("be.visible")
  //   .click();
  // cy.wait(tiempo);

  //   cy.get('[data-testid="item-icon-digital-files"]')
  //     .should("be.visible")
  //     .click();
  //   cy.get("._textTitle_t0g8a_25").should("have.text", "Expedientes");
  //   cy.wait(tiempo);
  //   cy.get(
  //     "._cardsContainer_1q0xu_11 > div:nth-child(2) > div > ._cardItemContainer_3rmmx_1 > .MuiSvgIcon-root"
  //   ).click();
  //   cy.get(
  //     "._cardsContainer_mehm7_26 > div:nth-child(10) > div > ._cardItemContainer_1e6fe_1 > .MuiSvgIcon-root"
  //   ).click();

  //   cy.get(".sc-eqUAAy").click();

  //   cy.get(
  //     "._container_1vfwe_1 > ._boxModal_16c4r_1 > ._viewDocumentDetailContainer_1jxjv_1 > ._documentDetailContainer_1s5ni_1 > ._inputFile_1s5ni_4"
  //   ).type("C:\fakepathEvento_con_Horario_(2023) (1).pdf");

  //   // const ruta = "docs/Evento.pdf";
  //   // cy.get("[type='file']").attachFile(ruta);
  // });

  // it.skip(" Expedientes Digitales - Ver Historial del Documento ", () => {
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

  //   cy.get('[data-testid="item-icon-digital-files"]')
  //     .should("be.visible")
  //     .click();
  //   cy.get("._textTitle_t0g8a_25").should("have.text", "Expedientes");
  //   cy.wait(9000);

  //   cy.get(
  //     "div:nth-child(2) > div > ._cardItemContainer_1w4x4_1 > ._container_1i3x6_1 > svg"
  //   ).click();
  //   cy.get(
  //     "div:nth-child(2) > div > ._cardItemContainer_1bhic_1 > ._container_1i3x6_1 > svg"
  //   ).click();
  //   cy.get(
  //     ".MuiBox-root > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > .MuiButtonBase-root:nth-child(2)"
  //   ).click();

  //   cy.get('[data-testid="tab2"]')
  //     .should("have.text", "Historial")
  //     .should("be.visible")
  //     .click();
  //   cy.wait(1000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  // it.skip(" Expedientes Digitales - Ver Documento ", () => {
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

  //   cy.get('[data-testid="item-icon-digital-files"]')
  //     .should("be.visible")
  //     .click();
  //   cy.get("._textTitle_t0g8a_25").should("have.text", "Expedientes");
  //   cy.wait(9000);

  //   cy.get(
  //     "div:nth-child(2) > div > ._cardItemContainer_1w4x4_1 > ._container_1i3x6_1 > svg"
  //   ).click();
  //   cy.get(
  //     "div:nth-child(2) > div > ._cardItemContainer_1bhic_1 > ._container_1i3x6_1 > svg"
  //   ).click();
  //   cy.get('[data-testid="download"]').click();

  //   cy.wait(1000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  // it.skip(" Expedientes Digitales - Descargar Documento ", () => {
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

  //   cy.get('[data-testid="item-icon-digital-files"]')
  //     .should("be.visible")
  //     .click();
  //   cy.get("._textTitle_t0g8a_25").should("have.text", "Expedientes");
  //   cy.wait(9000);

  //   cy.get(
  //     "div:nth-child(2) > div > ._cardItemContainer_1w4x4_1 > ._container_1i3x6_1 > svg"
  //   ).click();
  //   cy.get(
  //     "div:nth-child(2) > div > ._cardItemContainer_1bhic_1 > ._container_1i3x6_1 > svg"
  //   ).click();

  //   cy.get('[data-testid="download"]').should("be.visible").click();
  //   cy.wait(tiempo);
  //   cy.xpath("//span[contains(.,'Descargar')]").should("be.visible").click();
  //   cy.wait(1000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });
});
