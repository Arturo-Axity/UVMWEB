/// <reference types='cypress' />

import DatosFiscalesPO from "../../../support/pageObjectsM/PortalAlumno/DatosFiscales/DatosFiscalesPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new DatosFiscalesPO();
  master.visitHome();

  //Administración de Datos Fiscales
  it(" Ver Registro de información Fiscal @sanity ", () => {
    master.verDatosF(2500);
  });
});
