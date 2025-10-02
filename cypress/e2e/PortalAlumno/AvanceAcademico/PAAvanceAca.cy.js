/// <reference types='cypress' />
import AvanceAcaPO from "../../../support/pageObjectsM/PortalAlumno/AvanceAcademicoPO/AvanceAcaPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new AvanceAcaPO();
  master.visitHome();

  it("Avance Académico - Validar tarjetas @smoke @sanity", () => {
    master.tarjetas(2500);
  });

  it("Avance Académico - Tap Materias @smoke @sanity", () => {
    master.tapMaterias(2500);
  });
});
