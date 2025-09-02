import Exp_Dig_MonitoreoAsigPO from "../../support/pageObjectsM/Administrador/Exp_Dig_MonitoreoAsigPO.cy.js";

describe("Portal administración", () => {
  const master = new Exp_Dig_MonitoreoAsigPO();
  master.visitHome();

  it("Monitoreo de asignaciones masivas - Exportar", () => {
    master.otros(2000);
  });
});
