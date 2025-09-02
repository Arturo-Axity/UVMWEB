import Cata_Param_por_ServicioPO from "../../support/pageObjectsM/Administrador/Cata_Param_por_ServicioPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Param_por_ServicioPO();
  master.visitHome();

  it("ParámetrosporServicio - Detalle, Exportar, Editar, Buscador ", () => {
    master.otros(2000);
  });
});
