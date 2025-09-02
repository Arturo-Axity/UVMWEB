import Config_BitacoraPagosPO from "../../support/pageObjectsM/Administrador/Config_BitacoraPagosPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_BitacoraPagosPO();
  master.visitHome();

  it(" Bitacora - Pagos: Exportar ", () => {
    master.export(2000);
  });
  it(" Bitacora - Pagos: Actualizar ", () => {
    master.actualizar(2000);
  });
  it(" Bitacora - Pagos: Filtrar ", () => {
    master.filtrar(2000);
  });
});
