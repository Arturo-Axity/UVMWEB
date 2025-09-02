import Cata_Catalogo_CampusPO from "../../support/pageObjectsM/Administrador/Cata_Catalogo_CampusPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Catalogo_CampusPO();
  master.visitHome();

  it("Catalogo Campus - Exportar, Buscar ", () => {
    master.otros(2000);
  });
});
