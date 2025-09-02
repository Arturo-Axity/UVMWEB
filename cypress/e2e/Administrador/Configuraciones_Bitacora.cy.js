import Config_BitacoraPO from "../../support/pageObjectsM/Administrador/Config_BitacoraPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_BitacoraPO();
  master.visitHome();

  it(" Bitacora - Consulta de movimientos: Exportar ", () => {
    master.export(2000);
  });
});
