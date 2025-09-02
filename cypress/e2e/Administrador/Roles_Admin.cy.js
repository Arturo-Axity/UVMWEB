import Roles_AdminPO from "../../support/pageObjectsM/Administrador/Roles_AdminPO.cy.js";

describe("Portal administración", () => {
  const master = new Roles_AdminPO();
  master.visitHome();

  it("Roles Administración - Agregar Nuevo Rol: bnt Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("Roles Administración - Agregar Nuevo Rol: Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  // it("Roles Administración - Agregar Nuevo Rol: Happy Path ", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route").contains("Catálogos / Roles / Portal administración");
  //   cy.wait(2000);
  //   cy.get(".btn-new-rol > .mdc-button__label").click();
  //   cy.wait(25000);
  //   cy.get(".ng-untouched").type("hola wold");
  //   cy.wait(4000);
  //   cy.get("#mat-mdc-checkbox-1-input").click();
  //   cy.wait(2000);
  //   cy.get("#mat-mdc-checkbox-3-input").click();
  //   cy.wait(2000);
  //   cy.get("#mat-mdc-checkbox-11-input").click();
  //   cy.wait(2000);
  //   cy.get("#mat-mdc-checkbox-19-input").click();
  //   cy.wait(2000);
  //   cy.xpath(
  //     "/html/body/app-root/section/div/div[2]/app-create-rol/section/div[2]/button[2]/span[2]"
  //   ).click();
  //   cy.wait(2000);
  //   cy.xpath(
  //     '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
  //   ).click();
  //   cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  // COMPLETO

  it("Roles Administración - Busqueda, Ver detalle, Ver editar, Exportar ", () => {
    master.otros(2000);
  });
});
