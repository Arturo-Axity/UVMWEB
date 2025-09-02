/// <reference types='cypress' />
import "cypress-file-upload";
import InfoEstudiantePO from "../../../support/pageObjectsM/PortalAlumno/InformacionEstudiantePO/InfoEstudiantePO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new InfoEstudiantePO();
  master.visitHome();

  it(" Información del estudiante - Información personal : Ver Datos personales", () => {
    master.verDatosPersonales(4000);
  });

  it(" Información del estudiante - Información personal : Ver Domicilio", () => {
    master.verDomicilio(4000);
  });

  it(" Información del estudiante - Ver Datos de contacto", () => {
    master.verDatosContacto(4000);
  });

  it(" Información del estudiante - Ver Padre, madre o tutor", () => {
    master.verTutor(4000);
  });

  it(" Información del estudiante - Padre, madre o tutor: Alta de Tutor", () => {
    master.altaTutor(4000);
  });

  it(" Información del estudiante - Ver Responsable económico", () => {
    master.verResponsable(4000);
  });

  it(" Información del estudiante - Responsable económico: Alta de Responsable", () => {
    master.altaResponsable(4000);
  });
});
