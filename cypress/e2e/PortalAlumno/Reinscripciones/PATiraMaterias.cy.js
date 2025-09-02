/// <reference types='cypress' />
import TiraMateriasPO from "../../../support/pageObjectsM/PortalAlumno/ReinscripcionesPO/TiraMateriasPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new TiraMateriasPO();
  master.visitHome();

  it(" Reinscirpciones - Ver Tira de materias", () => {
    master.verTiraMaterias(2500);
  });

  it(" Reinscirpciones - Ver detalle de materia ", () => {
    master.detalleMateria(2500);
  });

  it(" Reinscirpciones - Descargar Tira de materias ", () => {
    master.descargaTiraMateria(2500);
  });
});
