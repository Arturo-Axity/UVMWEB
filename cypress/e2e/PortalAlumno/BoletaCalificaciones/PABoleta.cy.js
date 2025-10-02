/// <reference types='cypress' />
import BoletaPO from "../../../support/pageObjectsM/PortalAlumno/BoletaCalificacionesPO/BoletaPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new BoletaPO();
  master.visitHome();

  it("Ver Promedio General en Boleta de Calificaciones @smoke @sanity", () => {
    master.boletaPromedio(1500);
  });

  it("Ver Detalle Boleta de Calificaciones @smoke @sanity", () => {
    master.boletaDetalle(1500);
  });

  it("Ver Mensaje en Boleta de Calificaciones SIN Materias o Calificaciones @negative", () => {
    master.mensajeSinCalifMateria(1500);
  });

  it("Descargar Boleta de Calificaciones @smoke @sanity", () => {
    master.boletaDescarga(1500);
  });
});
