import Config_Cedenciales_DigiPO from "../../support/pageObjectsM/Administrador/Config_Credenciales_DigiPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_Cedenciales_DigiPO();
  master.visitHome();

  it(" Credencial Digital - SWITCHES, Busqueda, Exportar ", () => {
    master.otros(2000);
  });
});
