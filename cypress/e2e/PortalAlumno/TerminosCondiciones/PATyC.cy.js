/// <reference types='cypress' />
import TyCPO from "../../../support/pageObjectsM/PortalAlumno/TerminosCondicionesPO/TyCPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new TyCPO();
  master.visitHome();

  it(" Términos y Condiciones - Ver Carta de TyC ", () => {
    master.verTyC(2500);
  });
});
