import Cata_Param_PlantillasPO from "../../support/pageObjectsM/Administrador/Cata_Param_PlantillasPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Param_PlantillasPO();
  master.visitHome();

  it("Catálogo Parametros Plantilla - Boton Cancelar", () => {
    master.btnCancelar(2000);
  });

  it("Catálogo Parametros Plantilla - Campos Vacios", () => {
    master.camposVacios(2000);
  });

  // it.skip("Catálogo Parametros Plantilla - Boton Happy Path", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
  //   );
  //   cy.wait(2000);
  //   cy.get(".route").contains(
  //     "Catálogos / Administración de catálogos / Parámetros de plantillas"
  //   );
  //   cy.wait(2000);
  //   //Boton Agregar Registo Completo
  //   cy.get(".btn-primary > .mdc-button__label").click();
  //   cy.wait(2000);

  //   let numero_test = 1;

  //   for (let num = 1; num <= numero_test; num++) {
  //     let estadoArr = ["1: 1", "3:13", "5:32"];
  //     let Ramdom_estado =
  //       estadoArr[Math.floor(Math.random() * estadoArr.length)];
  //     let cantidad = Math.floor(Math.random() * 3000);

  //     cy.xpath('//*[@id="name"]')
  //       .should("be.visible")
  //       .type("NombreParam" + cantidad + "prueba");
  //     cy.wait(2000);
  //     cy.xpath(
  //       '//*[@id="mat-mdc-dialog-0"]/div/div/app-modal-new-param/div/div[3]/app-input-custom/app-auto-complete-reactive/form/div/div[1]/input'
  //     ).click();
  //     cy.wait(2000);
  //     cy.xpath("(//div[contains(.,'NO_CUENTA')])[17]").click();
  //     cy.wait(2000);
  //     cy.xpath('//*[@id="description"]')
  //       .should("be.visible")
  //       .type("DescriParam" + cantidad + "prueba");
  //     cy.wait(2000);

  //     cy.xpath("//span[contains(.,'Guardar')]").click();
  //     cy.wait(2000);
  //     cy.xpath("//span[contains(.,'Confirmar')]").click();

  //     cy.wait(2000);
  //     cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  //   }
  // });

  it("Catálogo Parametros Plantilla - Buscador - Swiches - Editar - Exportar", () => {
    master.otros(2000);
  });
});
