import Modulos_Servicios_AdminPO from "../../support/pageObjectsM/Administrador/Modulos_Servicios_AdminPO.cy.js";

describe("Portal administración", () => {
  const master = new Modulos_Servicios_AdminPO();
  master.visitHome();

  it("Modulo y Servicios - Portal Admin: Exportar ", () => {
    master.otros(2000);
  });
});
