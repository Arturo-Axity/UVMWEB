import Plantillas_Cartas_de_AceptacionPO from "../../support/pageObjectsM/Administrador/Plantillas_Cartas_de_AceptacionPO.cy.js";

describe("Portal administración", () => {
  const master = new Plantillas_Cartas_de_AceptacionPO();
  master.visitHome();

  it("Cartas de Aceptación - Campos Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("Cartas de Aceptación - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  //COMPLETO si ya estan las 3 cartas creadas saldra error
  // it("Cartas de Aceptación / Campos Happy Path  ", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/templates/admin/acceptance-letters"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route").contains(
  //     "Plantillas / Administración de plantillas / Cartas de aceptación"
  //   );
  //   cy.wait(2000);
  //   //Boton Nuevo
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(2000);
  //   cy.get("#title").type("Prueba");
  //   cy.wait(2000);
  //   // SELECCIONA UN OPCION - En este caso  - YA QUE ESTA AGREGADOS LOS SERVICIOS TODOS DE MOMENTO PARA UN HAPPY PATH por lo que fallara
  //   cy.get(".mat-mdc-select-placeholder").click();
  //   cy.wait(2000);
  //   cy.xpath('//*[@id="mat-option-5"]/span').click();
  //   cy.wait(2000);
  //   //header
  //   cy.get("#mat-mdc-checkbox-1-input").click();
  //   cy.wait(2000);
  //   //texto header
  //   cy.get(
  //     ".conditional-editor > app-text-editor > .content-text-editor > #editor > .ng-star-inserted > .ql-editor"
  //   ).type("HEADER TEXTO");
  //   cy.wait(2000);
  //   //CUERPO
  //   cy.get(".ql-editor").type("PRUEBA CYPRESS");
  //   cy.wait(2000);
  //   //boton primario
  //   cy.get("#mat-mdc-checkbox-3-input").click();
  //   cy.wait(2000);
  //   cy.get("#namePrimaryBtn").type("btn1");
  //   cy.wait(2000);
  //   //boton secudario
  //   cy.get("#mat-mdc-checkbox-4-input").click();
  //   cy.wait(2000);
  //   cy.get("#nameSecundaryBtn").type("btn2");
  //   cy.wait(2000);
  //   //checks
  //   cy.get("#mat-mdc-checkbox-5-input").click();
  //   cy.wait(2000);
  //   cy.get("#mat-mdc-checkbox-6-input").click();
  //   cy.wait(2000);
  //   //guardar y confirmar
  //   cy.xpath(
  //     '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-domain/div/div[6]/button[2]/span[2]'
  //   ).click();
  //   cy.wait(2000);
  //   cy.xpath(
  //     '//*[@id="mat-mdc-dialog-1"]/div/div/app-modal-alert/section/div[3]/button[2]/span[2]'
  //   ).click();
  //   cy.wait(2000);
  //   cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  // });

  //COMPLETO

  it("Cartas de Aceptación - Exportar, Buscar ", () => {
    master.otros(2000);
  });
});
