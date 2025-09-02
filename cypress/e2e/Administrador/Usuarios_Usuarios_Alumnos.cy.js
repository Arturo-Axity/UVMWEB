/// <reference types='cypress' />
import Usuarios_Usuarios_AlumnosPO from "../../support/pageObjectsM/Administrador/Usuarios_Usuarios_AlumnosPO.cy.js";

describe("Portal administración", () => {
  const master = new Usuarios_Usuarios_AlumnosPO();
  master.visitHome();

  it("Usuarios Alumnos - TTP agregar nuevo usuario: cancelar  ", () => {
    master.btnCancelar(2000);
  });

  it("Usuarios Alumnos - TTF agregar nuevo usuario: campos vacios ", () => {
    master.camposVacios(2000);
  });

  // it.skip("Usuarios Alumnos - TTP agregar nuevo usuario ", () => {
  //   cy.visit(
  //     "https://devtools.axity.com/laureatedev/qa/sdig/uvm/admin/users/enrollment/student"
  //   );
  //   cy.wait(tiempo);
  //   cy.get(".btn-primary > .mdc-button__label").should("be.visible").click();
  //   cy.wait(5000);
  //   cy.get("#mat-input-3").type("Juan Esteban Aburto Gaona");
  //   cy.wait(tiempo);
  //   cy.xpath("(//img[contains(@alt,'icon_search')])[2]").click();
  //   cy.wait(tiempo);
  //   cy.get("#mat-option-0").click();
  //   cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  it("Usuarios Alumnos - TTP Busqueda filtros ", () => {
    master.otros(2000);
  });
});
