/// <reference types='cypress' />
import AvanceAcaPO from "../../../support/pageObjectsM/PortalAlumno/AvanceAcademicoPO/AvanceAcaPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new AvanceAcaPO();
  master.visitHome();

  it("Avance Académico - Validar tarjetas ", () => {
    master.tarjetas(2500);
  });

  it("Avance Académico - Tap Materias ", () => {
    master.tapMaterias(2500);
  });
});
