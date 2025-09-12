/// <reference types='cypress' />
import BibliotecaVirtualPO from "../../../support/pageObjectsM/PortalAlumno/BibliotecaVirtualPO/BibliotecaVirtualPO.cy.js";

describe("Acceso al Portal Alumno - Biblioteca Virtual", () => {
  const master = new BibliotecaVirtualPO();
  master.visitHome();

  it("Biblioteca virtual - Cancelar @happyPath @regression", () => {
    master.cancelar(1500);
  });

  it("Biblioteca virtual - Ir a link @smoke @critical @happyPath @regression", () => {
    master.irLink(1500);
  });
});
