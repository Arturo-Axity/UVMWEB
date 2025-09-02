import Usuarios_Admin_de_TutoresPO from "../../support/pageObjectsM/Administrador/Usuarios_Admin_de_TutoresPO.cy.js";

describe("Portal administración", () => {
  const master = new Usuarios_Admin_de_TutoresPO();
  master.visitHome();

  it("Modulo Tutores - Botón Cancelar  ", () => {
    master.btnCancelar(2000);
  });

  it("Modulo Tutores - Campos Vacios  ", () => {
    master.camposVacios(2000);
  });

  // it("Modulo Tutores - Botón Happy Path ", () => {
  //   cy.visit(
  //     "https://devtools.axity.com/laureatedev/qa/sdig/uvm/admin/users/tutors/admin"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route").contains("Usuarios / Tutores / Administración de tutores");
  //   cy.wait(2000);
  //   //Boton Nuevo Tutor
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(2000);
  //   cy.xpath('//*[@id="name"]').type("Marcelo Alan");
  //   cy.wait(2000);
  //   cy.get("#lastName").type("Alcantar");
  //   cy.wait(2000);
  //   cy.get("#secondLastName").type("Rodriguez");
  //   cy.wait(2000);
  //   cy.get("#curp").type("ROMA951208HSLBHJ04");
  //   cy.wait(2000);
  //   cy.get("#mail").type("marce_14@axity.com");
  //   cy.wait(2000);
  //   cy.get("#movilePhone").type("6691583028");
  //   cy.wait(2000);
  //   cy.get("#company").type("AXITY");
  //   cy.wait(2000);
  //   cy.get("#position").type("QA");
  //   cy.wait(2000);
  //   cy.get("#occupation").type("TESTER");
  //   cy.wait(2000);
  //   cy.get("#mat-select-value-5 > .mat-mdc-select-placeholder").click();
  //   cy.wait(2000);
  //   cy.get("#mat-option-8").click();
  //   cy.wait(2000);
  //   cy.get("#officePhone").type("+5239445343");
  //   cy.wait(2000);
  //   cy.get("#extension").type("23234564");
  //   cy.wait(2000);

  //   // Alumnos Asociados
  //   cy.get("#mat-input-1").type("930076713");
  //   cy.wait(2000);
  //   cy.get(".icon-search > img").click();
  //   cy.wait(30000);
  //   cy.get("#mat-option-50").click({ force: true });
  //   cy.wait(2000);
  //   cy.get(".ml-3 > .mdc-button__label").click();
  //   cy.wait(2000);
  //   cy.get("#mat-mdc-checkbox-1-input").click();
  //   cy.wait(2000);
  //   cy.get("#mat-select-value-11 > .mat-mdc-select-placeholder").click();
  //   cy.wait(2000);
  //   cy.get("#mat-option-54").click();
  //   cy.wait(2000);
  //   // cy.get(".container-buttons > .btn-primary > .mdc-button__label").click();
  //   // cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  it("Modulo Tutores - Ver detalle, Ver Editar , Buscar, exportar ", () => {
    master.otros(2000);
  });
});
