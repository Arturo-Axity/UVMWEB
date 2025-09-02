import Biblio_Dig_Consulta_Doc_AdminPO from "../../support/pageObjectsM/Administrador/Biblio_Dig_Consulta_Doc_AdminPO.cy.js";

describe("Portal administración", () => {
  const master = new Biblio_Dig_Consulta_Doc_AdminPO();
  master.visitHome();

  //---------------------------------Consulta de Documentos Administrativos-----------------------------------------------------------------------------
  it(" B D - Documentos Administrativos - btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" B D - Documentos Administrativos - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  // it(" B D - Documentos Administrativos - Happy Path - Sin apro", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/adtve-docs"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route").contains(
  //     "Bibliotecas digitales / Administración de bibliotecas / Consulta de documentos administrativos"
  //   );
  //   cy.wait(2000);
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(2000);
  //   //Pestala Bibliotecas
  //   cy.get(".mat-mdc-select-placeholder").click();
  //   cy.wait(2000);
  //   cy.get("#mat-option-21").click();
  //   cy.wait(2000);
  //   //Pestaña Archivo
  //   cy.get("#mat-tab-label-0-1 > .mdc-tab__content").click();
  //   cy.wait(2000);
  //   cy.get("#mat-radio-3-input").click();
  //   cy.wait(2000);
  //   cy.get("#fileUrl").type("http://ejemplo");
  //   cy.wait(2000);
  //   //Pestaña Formulario
  //   cy.get(
  //     "#mat-tab-label-0-2 > .mdc-tab__content > .mdc-tab__text-label"
  //   ).click();
  //   cy.wait(2000);
  //   cy.get("#name").type("Biblioprueba");
  //   cy.wait(2000);
  //   cy.get("#description").type("Pcyprss");
  //   cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  it(" B D - Documentos Administrativos - Exportar, Ver detalle, Actualizar, Buscador ", () => {
    master.otros(2000);
  });
});
