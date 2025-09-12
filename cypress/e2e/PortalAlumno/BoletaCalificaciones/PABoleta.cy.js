/// <reference types='cypress' />
import BoletaPO from "../../../support/pageObjectsM/PortalAlumno/BoletaCalificacionesPO/BoletaPO.cy.js";

describe("Acceso al Portal Alumno - Boleta de Calificaciones", () => {
  const master = new BoletaPO();
  master.visitHome();

  it("Ver Boleta de Calificaciones - Presencial @sanity @smoke @critical @happyPath @regression", () => {
    master.boletaPresencial(1500);
  });

  it("Boleta de Calificaciones - Presencial Filtrado @happyPath @regression", () => {
    master.presencialFiltrado(1500);
  });

  it("Descargar Boleta de Calificaciones - Presencial @smoke @critical @regression", () => {
    master.descargaPresencial(1500);
  });

  it("Ver Boleta de Calificaciones - En línea @sanity @smoke @critical @happyPath @regression", () => {
    master.boletaEnlinea(1500);
  });

  it("Boleta de Calificaciones - En línea Filtrado @happyPath @regression", () => {
    master.enlineaFiltrado(1500);
  });

  it("Descargar Boleta de Calificaciones - En línea @smoke @critical @regression", () => {
    master.descargaEnlinea(1500);
  });
});
