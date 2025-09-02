import Usuarios_Usuarios_AdminPO from "../../support/pageObjectsM/Administrador/Usuarios_Usuarios_AdminPO.cy.js";

describe("Portal administración", () => {
  const master = new Usuarios_Usuarios_AdminPO();
  master.visitHome();

  const rutaArchivo = "cypress/fixtures/carpetaArchivo/elArchivo.json";
  let elNombre = null;

  it("Usuarios - TTP agregar nuevo usuario: cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("Usuarios - TTF agregar nuevo usuario: campos vacios ", () => {
    master.camposVacios(2000);
  });

  // it("Usuarios - TTP agregar nuevo usuario ", () => {
  //   cy.visit(
  //     "https://devtools.axity.com/laureatedev/qa/sdig/uvm/admin/users/enrollment/admin"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route")
  //     .contains("Usuarios / Enrolamiento de usuarios / Portal administración")
  //     .should("be.visible");
  //   cy.wait(2000);
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(12000);
  //   cy.get(".route")
  //     .contains(
  //       "Enrolamiento de usuarios / Portal administración / Enrolar nuevo usuario"
  //     )
  //     .should("be.visible");
  //   cy.wait(2000);
  //   cy.xpath("//input[@placeholder='Buscar usuario por nombre o correo']").type(
  //     "Juan Ramon De La Fuente"
  //   );
  //   cy.wait(2000);
  //   cy.get(
  //     ".input-search > app-input-search-bar > .ng-untouched > .search-bar > .icon-search > img"
  //   ).click();
  //   cy.wait(2000);
  //   cy.get("#mat-option-60").click();
  //   cy.wait(2000);
  //   cy.get(".sub-title")
  //     .contains("¿Desea emplear al usuario Juan Ramon De La Fuente?")
  //     .should("be.visible");
  //   cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  it("Usuarios - TTP Busqueda filtros ", () => {
    master.otros(2000);
  });
});
