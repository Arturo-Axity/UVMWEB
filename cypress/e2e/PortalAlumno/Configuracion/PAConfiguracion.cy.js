/// <reference types='cypress' />
import ConfiguracionPO from "../../../support/pageObjectsM/PortalAlumno/ConfiguracionPO/ConfiguracionPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new ConfiguracionPO();
  master.visitHome();

  it(" Configuración - Ver dispositivos conectados @sanity", () => {
    master.verDispositivos(2500);
  });

  it(" Configuración - Cerrar sesión 1x1 @sanity", () => {
    master.cerrarSesion(2500);
  });

  it(" Configuración - Cerrar todas las sesiones @sanity", () => {
    master.cerrarTodas(2500);
  });
});
