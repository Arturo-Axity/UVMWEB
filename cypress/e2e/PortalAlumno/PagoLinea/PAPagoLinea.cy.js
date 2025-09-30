/// <reference types='cypress' />
import PagoLineaPO from "../../../support/pageObjectsM/PortalAlumno/PagoLineaPO/PagoLineaPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new PagoLineaPO();
  master.visitHome();

  it(" Pago en Línea - Cancelar @sanity @negative", () => {
    master.cancelar(1500);
  });

  it(" Pago en Línea - Ir a link @sanity", () => {
    master.irLink(1500);
  });
});
