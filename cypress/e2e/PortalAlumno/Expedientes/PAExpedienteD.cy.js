/// <reference types='cypress' />
// import "cypress-file-upload";
import ExpedienteDPO from "../../../support/pageObjectsM/PortalAlumno/ExpedientesPO/ExpedienteDPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new ExpedienteDPO();
  master.visitHome();

  it(" Expedientes Digitales - Ver expedientes @sanity", () => {
    master.verExpedientes(2500);
  });
});
