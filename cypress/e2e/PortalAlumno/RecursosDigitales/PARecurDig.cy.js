/// <reference types='cypress' />
import RecurDigPO from "../../../support/pageObjectsM/PortalAlumno/RecursosDigitalesPO/RecurDigPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new RecurDigPO();
  master.visitHome();

  it(" Recursos Digitales - Búsqueda de biblioteca @sanity", () => {
    master.busquedaBib(2500);
  });
});
