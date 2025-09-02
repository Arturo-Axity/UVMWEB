import Config_AlumnosPO from "../../support/pageObjectsM/Administrador/Config_AlumnosPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_AlumnosPO();
  master.visitHome();

  it(" Configuraciones - Bitacora Alumnos: Exportar ", () => {
    master.export(2000);
  });
});
