/// <reference types='cypress' />
import NotificaPO from "../../../support/pageObjectsM/PortalAlumno/NotificacionesPO/NotificaPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new NotificaPO();
  master.visitHome();

  it(" Notificaciones - consulta ", () => {
    master.notifica(1500);
  });
});
