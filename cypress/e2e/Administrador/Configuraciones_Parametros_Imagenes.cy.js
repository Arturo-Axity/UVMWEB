import Config_Parametros_ImagPO from "../../support/pageObjectsM/Administrador/Config_Parametros_ImagPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_Parametros_ImagPO();
  master.visitHome();

  it("ParámetrosImagenes - Exportar, Editar, Buscador ", () => {
    master.otros(2000);
  });
});
