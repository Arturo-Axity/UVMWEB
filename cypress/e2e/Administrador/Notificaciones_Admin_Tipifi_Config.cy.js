import Notifi_Admin_Tipifi_ConfigPO from "../../support/pageObjectsM/Administrador/Notifi_Admin_Tipifi_ConfigPO.cy.js";

describe("Portal administración", () => {
  const master = new Notifi_Admin_Tipifi_ConfigPO();
  master.visitHome();

  it(" Configuraciones: Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" Configuraciones: Busqueda, Exportar ", () => {
    master.otros(2000);
  });
});
