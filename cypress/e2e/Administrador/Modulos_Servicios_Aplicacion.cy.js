import Modulos_Servicios_AplicacionPO from "../../support/pageObjectsM/Administrador/Modulos_Servicios_AplicacionPO.cy.js";

describe("Portal administración", () => {
  const master = new Modulos_Servicios_AplicacionPO();
  master.visitHome();

  it("Modulo y Servicios - Aplicación Alumnos: Exportar ", () => {
    master.otros(2000);
  });
});
