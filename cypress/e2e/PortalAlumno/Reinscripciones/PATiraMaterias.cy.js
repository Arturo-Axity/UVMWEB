/// <reference types='cypress' />
import TiraMateriasPO from "../../../support/pageObjectsM/PortalAlumno/ReinscripcionesPO/TiraMateriasPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new TiraMateriasPO();
  master.visitHome();

  it(" Reinscirpciones - Ver Tira de materias @sanity @smoke", () => {
    master.verTiraMaterias(2500);
  });

  it(" Reinscirpciones - Ver detalle de materia @sanity", () => {
    master.detalleMateria(2500);
  });

  it(" Reinscirpciones - Descargar Tira de materias @sanity", () => {
    master.descargaTiraMateria(2500);
  });
});
