/// <reference types='cypress' />
import "cypress-file-upload";
import InfoEstudiantePO from "../../../support/pageObjectsM/PortalAlumno/InformacionEstudiantePO/InfoEstudiantePO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new InfoEstudiantePO();
  master.visitHome();

  it(" Información del estudiante - Información personal : Ver Datos personales @sanity @smoke", () => {
    master.verDatosPersonales(4000);
  });

  it(" Información del estudiante - Información personal : Ver Domicilio @sanity @smoke", () => {
    master.verDomicilio(4000);
  });

  it(" Información del estudiante - Ver Datos de contacto @sanity @smoke", () => {
    master.verDatosContacto(4000);
  });

  it(" Información del estudiante - Ver Padre, madre o tutor @sanity @smoke", () => {
    master.verTutor(4000);
  });

  it(" Información del estudiante - Padre, madre o tutor: Alta de Tutor @sanity @regression @happyPath @smoke", () => {
    master.altaTutor(4000);
  });

  it(" Información del estudiante - Ver Responsable económico @sanity @smoke", () => {
    master.verResponsable(4000);
  });

  it(" Información del estudiante - Responsable económico: Alta de Responsable @sanity @regression @happyPath @smoke", () => {
    master.altaResponsable(4000);
  });
});
