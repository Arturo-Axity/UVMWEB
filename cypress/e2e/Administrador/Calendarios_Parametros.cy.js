import Calend_ParametrosPO from "../../support/pageObjectsM/Administrador/Calend_ParametrosPO.cy.js";

describe("Portal administración", () => {
  const master = new Calend_ParametrosPO();
  master.visitHome();

  it(" Calendarios - Parámetros - Exportar, Busqueda, Editar ", () => {
    master.otros(2000);
  });
});
