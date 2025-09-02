import Cata_Catalogo_DHWPO from "../../support/pageObjectsM/Administrador/Cata_Catalogo_DHWPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Catalogo_DHWPO();
  master.visitHome();

  it("Catalogo DHW -  Exportar - Buscar ", () => {
    master.otros(2000);
  });
});
