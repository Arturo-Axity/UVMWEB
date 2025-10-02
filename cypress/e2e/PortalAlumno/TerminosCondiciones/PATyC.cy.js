/// <reference types='cypress' />
import TyCPO from "../../../support/pageObjectsM/PortalAlumno/TerminosCondicionesPO/TyCPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new TyCPO();
  master.visitHome();

  it(" Términos y Condiciones - Ver Carta de TyC @sanity", () => {
    master.verTyC(2500);
  });
});
