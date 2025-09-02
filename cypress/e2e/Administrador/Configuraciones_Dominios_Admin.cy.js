import Config_Dominios_AdminPO from "../../support/pageObjectsM/Administrador/Config_Dominios_AdminPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_Dominios_AdminPO();
  master.visitHome();

  it(" Dominios Administración - btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" Dominios Administración - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it(" Dominios Administración - Happy Path ", () => {
    master.happyPath(2000);
  });
  it(" Dominios Administración - Buscador, Exportar", () => {
    master.otros(2000);
  });
});
