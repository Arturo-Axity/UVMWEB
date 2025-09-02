import Config_ParametrosPO from "../../support/pageObjectsM/Administrador/Config_ParametrosPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_ParametrosPO();
  master.visitHome();

  it(" Configuraciones Bitacora - Parámetros: Exportar, Editar, Buscador ", () => {
    master.otros(2000);
  });
});
