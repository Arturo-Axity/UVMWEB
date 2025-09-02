import Obtener_PermisosUVMPO from "../../support/pageObjectsM/Administrador/Obtener_PermisosUVMPO.cy.js";

describe("Evidencia de los permisos del Portal Administración UVM", () => {
  const master = new Obtener_PermisosUVMPO();
  master.visitHome();

  it("Permisos Portal Administración UVM", () => {
    master.permisosAdmin(5000);
  });

  it("Permisos Portal Alumnos UVM", () => {
    master.permisosAlumno(5000);
  });
});
