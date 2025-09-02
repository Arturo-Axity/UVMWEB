/// <reference types='cypress' />
import BibliotecaVirtualPO from "../../../support/pageObjectsM/PortalAlumno/BibliotecaVirtualPO/BibliotecaVirtualPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new BibliotecaVirtualPO();
  master.visitHome();

  it(" Biblioteca virtual - Cancelar ", () => {
    master.cancelar(1500);
  });

  it(" Biblioteca virtual - Ir a link ", () => {
    master.irLink(1500);
  });
});
