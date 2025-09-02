/// <reference types='cypress' />

import DatosFiscalesPO from "../../../support/pageObjectsM/PortalAlumno/DatosFiscales/DatosFiscalesPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
    const master = new DatosFiscalesPO();
    master.visitHome();

    //Administración de Datos Fiscales
    it(" Ver Registro de información Fiscal ", () => {
        master.verDatosF(2500);
    });

});
