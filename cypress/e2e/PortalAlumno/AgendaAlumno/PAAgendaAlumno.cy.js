/// <reference types='cypress' />
import AgendaAlumnoPO from "../../../support/pageObjectsM/PortalAlumno/AgendaAlumnoPO/AgendaAlumnoPO.cy.js";

describe(" Acceso al Portal Alumno @alumno @agenda", () => {
  const master = new AgendaAlumnoPO();
  master.visitHome();

  it("Agenda del Alumno - Filtrar @sanity @agenda", () => {
    master.filtrar(2500);
  });

  it("Agenda del Alumno - Ver Agenda por Día, Semana, Mes, Año @smoke @sanity @agenda", () => {
    master.verAgenda(2500);
  });

  it("Agenda del Alumno - Navegar Agenda entre < , > @happyPath @agenda", () => {
    master.navegarAgenda(2500);
  });

  it("Agenda del Alumno - Detalle de materia o evento @regression @agenda", () => {
    master.detalle(2500);
  });
});
