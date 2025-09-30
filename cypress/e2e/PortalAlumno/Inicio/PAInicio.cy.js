/// <reference types='cypress' />
import InicioPO from "../../../support/pageObjectsM/PortalAlumno/InicioPO/InicioPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new InicioPO();
  master.visitHome();

  it("Inicio - Cambiar Carrera @sanity", () => {
    master.cambiarCarrera(2500);
  });

  it("Inicio - Tap Agenda @sanity @smoke", () => {
    master.tapAgenda(2500);
  });

  it("Inicio - Tap Avance Académico @sanity @smoke", () => {
    master.tapAvanceAca(2500);
  });
});
