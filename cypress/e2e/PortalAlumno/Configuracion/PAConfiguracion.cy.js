/// <reference types='cypress' />
import ConfiguracionPO from "../../../support/pageObjectsM/PortalAlumno/ConfiguracionPO/ConfiguracionPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new ConfiguracionPO();
  master.visitHome();

  it(" Configuración - Ver dispositivos conectados ", () => {
    master.verDispositivos(2500);
  });

  it(" Configuración - Cerrar sesión 1x1 ", () => {
    master.cerrarSesion(2500);
  });

  it(" Configuración - Cerrar todas las sesiones ", () => {
    master.cerrarTodas(2500);
  });
});
