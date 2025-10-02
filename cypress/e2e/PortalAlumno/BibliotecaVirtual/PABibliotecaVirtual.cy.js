/// <reference types='cypress' />
import BibliotecaVirtualPO from "../../../support/pageObjectsM/PortalAlumno/BibliotecaVirtualPO/BibliotecaVirtualPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new BibliotecaVirtualPO();
  master.visitHome();

  it(" Biblioteca virtual - Cancelar @sanity @negative", () => {
    master.cancelar(1500);
  });

  it(" Biblioteca virtual - Ir a link @sanity", () => {
    master.irLink(1500);
  });
});
