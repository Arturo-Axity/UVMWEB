import Cata_Dias_ProrrogaPO from "../../support/pageObjectsM/Administrador/Cata_Dias_ProrrogaPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Dias_ProrrogaPO();
  master.visitHome();

  it("Catálogo Dias de Prorroga - Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("Catálogo Dias de Prorroga - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it("Catálogo Dias de Prorroga - Happy Path ", () => {
    master.happyPath(2000);
  });

  it("Catálogo Dias de Prorroga - Switches, Buscar, Exportar, Editar", () => {
    master.otros(2000);
  });
});
