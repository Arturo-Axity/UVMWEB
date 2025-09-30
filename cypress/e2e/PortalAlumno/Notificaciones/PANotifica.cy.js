/// <reference types='cypress' />
import NotificaPO from "../../../support/pageObjectsM/PortalAlumno/NotificacionesPO/NotificaPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new NotificaPO();
  master.visitHome();

  it(" Notificaciones - consulta @sanity", () => {
    master.notifica(1500);
  });
});
