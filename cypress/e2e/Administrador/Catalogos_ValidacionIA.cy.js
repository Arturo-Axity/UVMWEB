import Cata_ValidaIAPO from "../../support/pageObjectsM/Administrador/Cata_ValidaIAPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_ValidaIAPO();
  master.visitHome();

  it("Catálogo Validación IA - Happy path", () => {
    master.happyPath(2000);
  });

  it("Catálogo Validación IA - Busqueda, Exportar", () => {
    master.otros(2500);
  });
});
