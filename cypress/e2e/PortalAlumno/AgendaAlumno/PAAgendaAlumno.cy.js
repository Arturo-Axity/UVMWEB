/// <reference types='cypress' />
import AgendaAlumnoPO from "../../../support/pageObjectsM/PortalAlumno/AgendaAlumnoPO/AgendaAlumnoPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new AgendaAlumnoPO();
  master.visitHome();

  it("Agenda del Alumno - Filtrar ", () => {
    master.filtrar(2500);
  });

  it("Agenda del Alumno - Ver Agenda por Día, Semana, Mes, Año ", () => {
    master.verAgenda(2500);
  });

  it("Agenda del Alumno - Navegar Agenda entre < , >", () => {
    master.navegarAgenda(2500);
  });

  it("Agenda del Alumno - Detalle de materia o evento", () => {
    master.detalle(2500);
  });
});
