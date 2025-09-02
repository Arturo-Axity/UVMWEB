import Obtener_PermisosUNITECPO from "../../support/pageObjectsM/Administrador/Obtener_PermisosUNITECPO.cy.js";

describe("Evidencia de los permisos del Portal Administración UNITEC", () => {
  const master = new Obtener_PermisosUNITECPO();
  master.visitHome();

  it("Permisos Portal Administración UNITEC", () => {
    master.permisosAdmin(5000);
  });

  it("Permisos Portal Alumnos UNITEC", () => {
    master.permisosAlumno(5000);
  });
});
