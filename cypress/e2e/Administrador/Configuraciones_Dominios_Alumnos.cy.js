import Config_Dominios_AlumnosPO from "../../support/pageObjectsM/Administrador/Config_Dominios_AlumnosPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_Dominios_AlumnosPO();
  master.visitHome();

  it(" Dominios Alumnos - btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" Dominios Alumnos - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it(" Dominios Alumnos - Happy Path ", () => {
    master.happyPath(2000);
  });

  it(" Dominios Alumnos - Busqueda, Exportar ", () => {
    master.otros(2000);
  });
});
