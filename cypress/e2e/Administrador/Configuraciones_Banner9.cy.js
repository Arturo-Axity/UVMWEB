import Config_Banner9PO from "../../support/pageObjectsM/Administrador/Config_Banner9PO.cy.js";

describe("Portal administración", () => {
  const master = new Config_Banner9PO();
  master.visitHome();

  it(" Configuraciones Banner 9 - Campus: Filtrar, Exportar, Buscador ", () => {
    master.otros(2000);
  });
});
