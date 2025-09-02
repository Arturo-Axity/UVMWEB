/// <reference types='cypress' />
import InicioPO from "../../../support/pageObjectsM/PortalAlumno/InicioPO/InicioPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new InicioPO();
  master.visitHome();

  it("Inicio - Cambiar Carrera @sanity", () => {
    master.cambiarCarrera(2500);
  });

  it("Inicio - Tap Agenda @test", () => {
    master.tapAgenda(2500);
  });

  it("Inicio - Tap Avance Académico ", () => {
    master.tapAvanceAca(2500);
  });
});
