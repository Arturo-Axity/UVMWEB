/// <reference types='cypress' />
import PagoLineaPO from "../../../support/pageObjectsM/PortalAlumno/PagoLineaPO/PagoLineaPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new PagoLineaPO();
  master.visitHome();

  it(" Pago en Línea - Cancelar ", () => {
    master.cancelar(1500);
  });

  it(" Pago en Línea - Ir a link ", () => {
    master.irLink(1500);
  });
});
