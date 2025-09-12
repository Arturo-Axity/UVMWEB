/// <reference types='cypress' />
import AvanceAcaPO from "../../../support/pageObjectsM/PortalAlumno/AvanceAcademicoPO/AvanceAcaPO.cy.js";

describe("Acceso al Portal Alumno - Avance Académico", () => {
  const master = new AvanceAcaPO();
  master.visitHome();

  it("Avance Académico - Validar tarjetas @sanity @smoke @critical", () => {
    master.tarjetas(2500);
  });

  it("Avance Académico - Tap Materias @happyPath @regression", () => {
    master.tapMaterias(2500);
  });
});
