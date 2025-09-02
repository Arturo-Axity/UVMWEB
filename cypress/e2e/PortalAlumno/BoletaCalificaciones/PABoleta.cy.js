/// <reference types='cypress' />
import BoletaPO from "../../../support/pageObjectsM/PortalAlumno/BoletaCalificacionesPO/BoletaPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new BoletaPO();
  master.visitHome();

  it("Ver Boleta de Calificaciones - Presencial ", () => {
    master.boletaPresencial(1500);
  });

  it("Boleta de Calificaciones - Presencial Filtrado ", () => {
    master.presencialFiltrado(1500);
  });

  it("Descargar Boleta de Calificaciones - Presencial ", () => {
    master.descargaPresencial(1500);
  });

  it("Ver Boleta de Calificaciones - En línea ", () => {
    master.boletaEnlinea(1500);
  });

  it("Boleta de Calificaciones - En línea Filtrado", () => {
    master.enlineaFiltrado(1500);
  });

  it("Descargar Boleta de Calificaciones - En línea ", () => {
    master.descargaEnlinea(1500);
  });
});
