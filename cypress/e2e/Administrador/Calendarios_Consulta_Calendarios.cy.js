import Calend_Consulta_CalendPO from "../../support/pageObjectsM/Administrador/Calend_Consulta_CalendPO.cy.js";

describe("Portal administración", () => {
  const master = new Calend_Consulta_CalendPO();
  master.visitHome();

  it(" Calendarios - Consulta de Calendarios - btn Cancelar  ", () => {
    master.btnCancelar(2000);
  });

  it(" Calendarios - Consulta de Calendarios - Campos Vacios  ", () => {
    master.camposVacios(2000);
  });

  // it(" Calendarios - Consulta de Calendarios - Happy Path  ", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/calendar/admin/consult"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route").contains(
  //     "Calendarios / Administración de calendarios / Consulta de calendarios"
  //   );
  //   cy.wait(2000);
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(2000);

  //   // Datos principales Configuración -  Primera Pestaña -- COMPLETA
  //   cy.get("#title").type("CALEN120723");
  //   cy.wait(2000);
  //   cy.get("#description").type("PRUEBA12C");
  //   cy.wait(2000);
  //   cy.get(".date-custom > .laureate-icon-png > img").click();
  //   cy.wait(2000);
  //   cy.xpath(
  //     '//*[@id="mat-datepicker-2"]/div/mat-multi-year-view/table/tbody/tr[3]/td[1]/button/span[1]'
  //   ).click();
  //   cy.wait(2000);
  //   cy.get(".mat-mdc-select-placeholder").click();
  //   cy.wait(2000);
  //   cy.get("#mat-option-4").click();
  //   cy.wait(2000);
  //   //Seleccion de color (Listo)
  //   cy.get(".container-color").click();
  //   cy.wait(2000);
  //   cy.get(":nth-child(2) > .circle").click();
  //   cy.wait(2000);
  //   cy.get(":nth-child(8) > .circle").click();
  //   cy.wait(2000);
  //   // // fechas (Listo)
  //   // //primera fecha
  //   // cy.get(
  //   //   ":nth-child(1) > app-input-custom > app-date-custom.ng-star-inserted > .ng-untouched.ng-star-inserted > .date-custom-container > .date-custom-material > .laureate-icon-png"
  //   // ).click();
  //   // cy.wait(2000);
  //   // cy.get(".mat-calendar-next-button").click();
  //   // cy.wait(2000);
  //   // cy.get(".mat-calendar-next-button").click();
  //   // cy.wait(2000);
  //   // cy.xpath(
  //   //   '//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[6]/td/button/span[1]'
  //   // ).click();
  //   // cy.wait(2000);
  //   // //segunda fecha
  //   // cy.get(
  //   //   ".ng-untouched.ng-star-inserted > .date-custom-container > .date-custom-material > .laureate-icon-png > img"
  //   // ).click();
  //   // cy.wait(2000);
  //   // cy.get(".mat-calendar-next-button").click();
  //   // cy.wait(2000);
  //   // cy.get(".mat-calendar-next-button").click();
  //   // cy.wait(2000);
  //   // cy.xpath(
  //   //   '//*[@id="mat-datepicker-1"]/div/mat-month-view/table/tbody/tr[5]/td[6]/button/span[1]'
  //   // ).click();
  //   // cy.wait(2000);
  //   // Segunda Pestaña - Población  -- LISTO
  //   cy.get(
  //     "#mat-tab-label-0-1 > .mdc-tab__content > .mdc-tab__text-label"
  //   ).click();
  //   cy.wait(2000);
  //   //Marca
  //   cy.get(
  //     ":nth-child(1) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-pristine.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click();
  //   cy.wait(2000);
  //   cy.get("#mat-mdc-checkbox-1-input").click();
  //   cy.wait(3000);
  //   cy.get(".cdk-overlay-backdrop").click();
  //   cy.wait(3000);
  //   //region
  //   cy.get(
  //     ":nth-child(2) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-pristine.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click();
  //   cy.wait(3000);
  //   cy.get("#mat-mdc-checkbox-25-input").click();
  //   cy.wait(3000);
  //   //Zona
  //   cy.get(
  //     ":nth-child(3) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-untouched.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click({ force: true });
  //   cy.wait(3000);
  //   cy.get("#mat-mdc-checkbox-32-input").click();
  //   cy.wait(3000);
  //   //Campus
  //   cy.get(
  //     ":nth-child(4) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-pristine.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click({ force: true });
  //   cy.wait(3000);
  //   cy.get("#mat-mdc-checkbox-33-input").click();
  //   cy.wait(3000);
  //   //Carrera/Programa
  //   cy.get(
  //     ":nth-child(5) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-untouched.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click({ force: true });
  //   cy.wait(3000);
  //   cy.get("#mat-mdc-checkbox-10-input").click();
  //   cy.wait(3000);
  //   //Modalidad/Escuela
  //   cy.get(
  //     ":nth-child(6) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-untouched.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click({ force: true });
  //   cy.wait(3000);
  //   cy.get("#mat-mdc-checkbox-15-input").click();
  //   cy.wait(2000);
  //   //Ciclos -- falta seleccionar los check pero si se puede.
  //   cy.get(
  //     ":nth-child(7) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-valid"
  //   ).click({ force: true });
  //   cy.wait(3000);
  //   //Linea de Negocio
  //   cy.get(
  //     ":nth-child(8) > app-input-custom > app-multiselect-optimized.ng-star-inserted > .ng-untouched.ng-star-inserted > .mat-mdc-menu-trigger > .info"
  //   ).click({ force: true });
  //   cy.wait(3000);
  //   cy.get("#mat-mdc-checkbox-20-input").click();
  //   cy.wait(2000);
  //   cy.get("#mat-tab-label-0-2").click({ force: true });
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  it("Calendarios - Busqueda, Exportar", () => {
    master.otros(2000);
  });
});
