import Modulos_Servicios_AlumnosPO from "../../support/pageObjectsM/Administrador/Modulos_Servicios_AlumnosPO.cy.js";

describe("Portal administración", () => {
  const master = new Modulos_Servicios_AlumnosPO();
  master.visitHome();

  it("Modulo y Servicios - Portal Alumno: Exportar ", () => {
    master.otros(2000);
  });
});
