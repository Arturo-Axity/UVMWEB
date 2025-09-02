import Cata_Catalogo_CalendPO from "../../support/pageObjectsM/Administrador/Cata_Catalogo_CalendPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Catalogo_CalendPO();
  master.visitHome();

  it("Catálogo Calendarios - Btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("Catálogo Calendarios - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it("Catálogo Calendarios - Happy Path ", () => {
    master.happyPath(2000);
  });

  it("Catálogo Calendarios - Buscar, Filtrar, Exportar ", () => {
    master.otros(2000);
  });
});
